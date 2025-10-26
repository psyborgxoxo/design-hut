import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Interface for conversation context
interface ConversationContext {
  lastTopic?: string;
  questionCount: number;
  mentionedRooms: string[];
  mentionedStyles: string[];
  userPreferences: Record<string, string>;
}

// Predefined Q&A for the chatbot - Expanded with more questions and detailed answers
const predefinedQA = {
  // Original questions
  "what colors make a room look bigger": "Light colors like whites, creams, and pastels reflect more light and create an illusion of space. Consider using monochromatic color schemes and adding mirrors to enhance the effect.",
  "what's the best lighting for a living room": "Layer your lighting with ambient (overhead), task (reading lamps), and accent lighting (decorative fixtures). Warm white LEDs (2700K-3000K) create a cozy atmosphere perfect for living rooms.",
  "how do i choose the right furniture size": "Follow the 2/3 rule: your sofa should take up about 2/3 of your wall length. Leave 18-24 inches of walking space around furniture, and ensure coffee tables are 14-18 inches from seating.",
  "what are the latest interior design trends": "Current trends include biophilic design (bringing nature indoors), maximalist wallpapers, curved furniture, warm earth tones, and sustainable materials like reclaimed wood.",
  "how much does interior design cost": "Our design services start from ₹50,000 for consultation packages. Full room designs typically range from ₹2-8 lakhs depending on scope, materials, and customization level.",
  "how long does a design project take": "Timeline varies by project scope: consultation (1-2 weeks), room design (4-8 weeks), full home renovation (3-6 months). We'll provide a detailed timeline during our initial consultation.",
  "do you work on small budgets": "Absolutely! We offer scalable solutions and can work with various budgets. We'll help you prioritize key elements and suggest cost-effective alternatives without compromising on style.",
  "what's your design process": "Our process includes: 1) Initial consultation, 2) Space assessment, 3) Concept development, 4) Design presentation, 5) Material selection, 6) Implementation, and 7) Final styling.",
  
  // New questions about specific rooms
  "how to design a small bedroom": "For small bedrooms, maximize space with multi-functional furniture like storage beds or wall-mounted nightstands. Use light colors, strategically placed mirrors, and proper lighting to create the illusion of space. Consider vertical storage solutions and minimize bulky furniture.",
  "kitchen design tips": "Focus on the work triangle (sink, stove, refrigerator) for efficiency. Consider island or peninsula layouts for extra workspace. Choose durable, easy-to-clean materials like quartz countertops. Incorporate adequate storage with a mix of open shelving and closed cabinets.",
  "bathroom renovation ideas": "Consider a walk-in shower with frameless glass to create a sense of space. Floating vanities make small bathrooms feel larger. Incorporate proper ventilation and lighting. Heated floors add luxury and comfort. Use large-format tiles with minimal grout lines for a sleek look.",
  
  // Style-specific questions
  "what is minimalist design": "Minimalist design focuses on simplicity, clean lines, and a 'less is more' philosophy. It features neutral color palettes, clutter-free spaces, and furniture with simple, clean lines. Each element serves a purpose, with emphasis on quality over quantity.",
  "how to achieve industrial style": "Industrial style embraces raw, unfinished elements like exposed brick, concrete, and metal. Incorporate salvaged or repurposed items, open spaces, neutral colors with metal accents, and vintage or factory-inspired lighting fixtures.",
  "what defines scandinavian design": "Scandinavian design balances minimalism with comfort, featuring clean lines, natural materials, and light color palettes. Key elements include wooden floors, white walls, functional furniture, and cozy textiles. It emphasizes natural light and connection to nature.",
  
  // Material and color questions
  "best flooring for high traffic areas": "For high-traffic areas, consider porcelain tiles (extremely durable and water-resistant), luxury vinyl plank (waterproof and scratch-resistant), engineered hardwood (more stable than solid wood), or polished concrete (virtually indestructible when properly sealed).",
  "how to choose a color scheme": "Start with a base neutral (white, beige, gray) and add 1-2 main colors plus 1-2 accent colors. Consider the 60-30-10 rule: 60% dominant color, 30% secondary color, and 10% accent color. Draw inspiration from existing elements like artwork or furniture you love.",
  "sustainable materials for eco-friendly design": "Consider bamboo (rapidly renewable), reclaimed wood, recycled metal and glass, cork (renewable and biodegradable), natural linoleum, and low-VOC paints and finishes. Look for FSC-certified wood products and locally sourced materials to reduce carbon footprint.",
  
  // Practical questions
  "how to maximize storage in small spaces": "Utilize vertical space with tall shelving, install cabinets up to the ceiling, use multi-functional furniture with built-in storage, incorporate under-bed storage, use the back of doors, and consider custom built-ins for awkward spaces.",
  "tips for better natural lighting": "Use light-colored window treatments or remove them entirely, place mirrors strategically to reflect light, trim outdoor foliage blocking windows, use glass doors instead of solid ones, and consider skylights or solar tubes for rooms with limited window access.",
  "how to make a room feel cozier": "Layer different textures through textiles like throw blankets, pillows, and rugs. Add warm lighting with table lamps and floor lamps instead of relying solely on overhead lighting. Incorporate natural elements, create intimate seating arrangements, and add personal touches."
};

const quickQuestions = [
  "What colors make a room look bigger?",
  "What's the best lighting for a living room?",
  "How do I choose the right furniture size?",
  "What are the latest interior design trends?",
  "How to design a small bedroom?",
  "What is minimalist design?",
  "How to maximize storage in small spaces?",
  "How to make a room feel cozier?"
];

function Chatbot({ isOpen, setIsOpen }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi there! How can I help with your interior design questions today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<ConversationContext>({
    questionCount: 0,
    mentionedRooms: [],
    mentionedStyles: [],
    userPreferences: {}
  });
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(2);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  // Improved answer matching with better context awareness and fuzzy matching
  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase().trim();
    
    // Direct match - check if the question exactly matches or contains a key
    for (const [key, answer] of Object.entries(predefinedQA)) {
      if (lowerQuestion === key.toLowerCase() || lowerQuestion.includes(key.toLowerCase())) {
        return answer;
      }
    }
    
    // Keyword matching - check for important keywords in the question
    const keywords = {
      "color": ["colors", "colour", "palette", "scheme", "paint"],
      "light": ["lighting", "lamp", "bright", "illumination"],
      "furniture": ["chair", "table", "sofa", "couch", "desk", "bed"],
      "design": ["style", "decor", "decoration", "aesthetic", "look"],
      "cost": ["price", "budget", "expensive", "affordable", "cheap"],
      "time": ["timeline", "duration", "long", "schedule", "process"],
      "room": ["space", "area", "bedroom", "kitchen", "bathroom", "living"],
      "material": ["wood", "fabric", "textile", "metal", "glass", "sustainable"],
      "storage": ["organize", "cabinet", "shelf", "closet", "clutter"]
    };
    
    // Check for keyword matches
    for (const [category, synonyms] of Object.entries(keywords)) {
      if (synonyms.some(word => lowerQuestion.includes(word))) {
        // Find the most relevant predefined question for this category
        for (const [key, answer] of Object.entries(predefinedQA)) {
          if (key.toLowerCase().includes(category)) {
            return answer;
          }
        }
      }
    }
    
    // Check for partial matches with a threshold
    const partialMatches = [];
    for (const [key, answer] of Object.entries(predefinedQA)) {
      const keyWords = key.toLowerCase().split(' ');
      const questionWords = lowerQuestion.split(' ');
      
      // Count how many words from the key appear in the question
      const matchCount = keyWords.filter(word => 
        questionWords.some(qWord => qWord.includes(word) || word.includes(qWord))
      ).length;
      
      // Calculate match percentage
      const matchPercentage = matchCount / keyWords.length;
      
      if (matchPercentage > 0.3) { // At least 30% match
        partialMatches.push({ key, answer, matchPercentage });
      }
    }
    
    // Return the best partial match if available
    if (partialMatches.length > 0) {
      partialMatches.sort((a, b) => b.matchPercentage - a.matchPercentage);
      return partialMatches[0].answer;
    }
    
    // Context-aware fallback responses based on question type
    if (lowerQuestion.includes('how') || lowerQuestion.includes('what')) {
      return "That's a great question about interior design! For this specific information, I'd recommend scheduling a consultation with our design experts who can provide tailored advice for your unique situation. Contact us at +91-63606-42212 or email ddsgroups.in@gmail.com.";
    } else if (lowerQuestion.includes('where') || lowerQuestion.includes('location')) {
      return "Our design studio is located in the heart of the city. For exact directions or to schedule a visit to our showroom, please contact us at +91-63606-42212 or email ddsgroups.in@gmail.com.";
    } else if (lowerQuestion.includes('when') || lowerQuestion.includes('time')) {
      return "Our design team is available Monday through Saturday, 10 AM to 6 PM. To schedule a consultation at a time that works for you, please contact us at +91-63606-42212 or email ddsgroups.in@gmail.com.";
    }
    
    // Default fallback response
    return "I'd be happy to help with that! For detailed information about your specific needs, please contact our design team at +91-63606-42212 or email us at ddsgroups.in@gmail.com. We offer personalized consultations to discuss your project requirements.";
  };

  // Function to update conversation context based on user input
  const updateConversationContext = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    
    // Update question count
    setConversationContext(prev => ({
      ...prev,
      questionCount: prev.questionCount + 1,
      lastTopic: userInput
    }));
    
    // Check for mentioned rooms
    const rooms = ['bedroom', 'kitchen', 'bathroom', 'living room', 'dining room', 'office'];
    rooms.forEach(room => {
      if (lowerInput.includes(room) && !conversationContext.mentionedRooms.includes(room)) {
        setConversationContext(prev => ({
          ...prev,
          mentionedRooms: [...prev.mentionedRooms, room]
        }));
      }
    });
    
    // Check for mentioned styles
    const styles = ['minimalist', 'industrial', 'scandinavian', 'modern', 'traditional', 'contemporary'];
    styles.forEach(style => {
      if (lowerInput.includes(style) && !conversationContext.mentionedStyles.includes(style)) {
        setConversationContext(prev => ({
          ...prev,
          mentionedStyles: [...prev.mentionedStyles, style]
        }));
      }
    });
    
    // Extract potential preferences
    if (lowerInput.includes('prefer') || lowerInput.includes('like') || lowerInput.includes('want')) {
      // Color preferences
      const colors = ['white', 'black', 'blue', 'green', 'red', 'yellow', 'gray', 'brown'];
      colors.forEach(color => {
        if (lowerInput.includes(color)) {
          setConversationContext(prev => ({
            ...prev,
            userPreferences: { ...prev.userPreferences, color }
          }));
        }
      });
      
      // Material preferences
      const materials = ['wood', 'metal', 'glass', 'concrete', 'fabric', 'leather'];
      materials.forEach(material => {
        if (lowerInput.includes(material)) {
          setConversationContext(prev => ({
            ...prev,
            userPreferences: { ...prev.userPreferences, material }
          }));
        }
      });
    }
  };
  
  // Function to get personalized response based on conversation context
  const getPersonalizedResponse = (baseAnswer: string): string => {
    // First-time user vs returning user
    if (conversationContext.questionCount <= 1) {
      return baseAnswer;
    }
    
    // Add personalized recommendations based on context
    let personalizedAnswer = baseAnswer;
    
    // If user has mentioned specific rooms, add relevant information
    if (conversationContext.mentionedRooms.length > 0) {
      const lastMentionedRoom = conversationContext.mentionedRooms[conversationContext.mentionedRooms.length - 1];
      if (baseAnswer.toLowerCase().includes(lastMentionedRoom)) {
        // Answer already contains info about the room, no need to add more
      } else if (personalizedAnswer.length < 500) { // Don't make answers too long
        personalizedAnswer += `\n\nSince you mentioned ${lastMentionedRoom} earlier, you might also be interested in our specialized ${lastMentionedRoom} design services.`;
      }
    }
    
    // If user has mentioned specific styles, add relevant information
    if (conversationContext.mentionedStyles.length > 0) {
      const lastMentionedStyle = conversationContext.mentionedStyles[conversationContext.mentionedStyles.length - 1];
      if (baseAnswer.toLowerCase().includes(lastMentionedStyle)) {
        // Answer already contains info about the style, no need to add more
      } else if (personalizedAnswer.length < 500) { // Don't make answers too long
        personalizedAnswer += `\n\nBased on your interest in ${lastMentionedStyle} design, we can create a customized approach that incorporates these elements into your space.`;
      }
    }
    
    // If user has expressed preferences, acknowledge them
    const preferences = Object.entries(conversationContext.userPreferences);
    if (preferences.length > 0 && personalizedAnswer.length < 500) {
      const [category, value] = preferences[preferences.length - 1];
      personalizedAnswer += `\n\nI've noted your preference for ${value} ${category}. Our designers can incorporate this into your personalized design plan.`;
    }
    
    return personalizedAnswer;
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userInput = inputValue.trim();
      const userMessage: ChatMessage = {
        id: messageIdRef.current++,
        text: userInput,
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);
      
      // Update conversation context based on user input
      updateConversationContext(userInput);

      // Use regular response system
      // Simulate typing delay
      setTimeout(() => {
        const baseAnswer = findAnswer(userInput);
        const personalizedAnswer = getPersonalizedResponse(baseAnswer);
        
        const botMessage: ChatMessage = {
          id: messageIdRef.current++,
          text: personalizedAnswer,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: ChatMessage = {
      id: messageIdRef.current++,
      text: question,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Update conversation context based on the quick question
    updateConversationContext(question);

    // Use regular response system with typing delay
    setTimeout(() => {
      const baseAnswer = findAnswer(question);
      const personalizedAnswer = getPersonalizedResponse(baseAnswer);
      
      const botMessage: ChatMessage = {
        id: messageIdRef.current++,
        text: personalizedAnswer,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          aria-label="Open chat support"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-xl shadow-lg w-80 sm:w-96 max-h-[600px] flex flex-col border border-gray-100 overflow-hidden transition-all duration-200 ease-in-out">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-green/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-3.5 w-3.5 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Design Hut AI</h3>
                <p className="text-neutral-300 text-xs">Ask me anything about interior design</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  // Reset conversation
                  setMessages([
                    {
                      id: 1,
                      text: "Hi there! How can I help with your interior design questions today?",
                      isUser: false,
                      timestamp: new Date()
                    }
                  ]);
                  setConversationContext({
                    questionCount: 0,
                    mentionedRooms: [],
                    mentionedStyles: [],
                    userPreferences: {}
                  });
                  messageIdRef.current = 2;
                }}
                className="text-neutral-300 hover:text-white transition-colors p-1.5 text-xs flex items-center"
                aria-label="Clear chat"
              >
                <span className="mr-1">Clear</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-300 hover:text-white transition-colors p-1.5"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="p-3 bg-gray-50 border-b">
              <p className="text-xs text-gray-600 mb-2 font-medium flex items-center">
                <span className="mr-1 text-green-600">•</span>
                Suggested Questions:
              </p>
              <div className="grid grid-cols-1 gap-1.5">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    disabled={isTyping}
                    className="block w-full text-left text-xs p-1.5 bg-white rounded-md hover:bg-green/10 hover:text-neutral-800 transition-colors border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed truncate"
                  >
                    <span className="mr-0.5 text-green-500 text-xs">•</span> {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <div 
            ref={chatMessagesRef}
            className="flex-1 overflow-y-auto p-3 space-y-2.5 max-h-80 min-h-80 bg-gray-50/50"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex flex-col max-w-[85%]">
                  <div
                    className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                      message.isUser
                        ? 'bg-green-600 text-white rounded-br-sm shadow-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100'
                    }`}
                  >
                    {message.text}
                  </div>
                  <span className="text-[10px] text-gray-500 mt-0.5 px-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-2.5 rounded-lg rounded-bl-sm max-w-[85%] shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs">Design Assistant is typing</span>
                    <div className="flex space-x-0.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-neutral-200 bg-white">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex space-x-1.5">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about interior design..."
                  className="w-full p-2.5 pr-8 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent text-xs shadow-sm"
                  disabled={isTyping}
                />
                {inputValue && (
                  <button 
                    type="button" 
                    onClick={() => setInputValue('')}
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white p-2.5 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-sm"
                disabled={!inputValue.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .bg-green {
          background-color: #10b981;
        }
        .hover\\:bg-white:hover {
          background-color: white;
        }
        .bg-green\\/90 {
          background-color: rgba(16, 185, 129, 0.9);
        }
        .bg-green\\/20 {
          background-color: rgba(16, 185, 129, 0.2);
        }
        .bg-green\\/10 {
          background-color: rgba(16, 185, 129, 0.1);
        }
        .ring-green\\/50 {
          --tw-ring-color: rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
}

export default Chatbot;