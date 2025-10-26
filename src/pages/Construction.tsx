// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Search, 
//   SlidersHorizontal, 
//   ArrowLeft,
//   ChevronRight,
//   Home,
//   Grid,
//   Ruler,
//   Package,
//   Info
// } from 'lucide-react';

// // Product categories and data
// const materials = {
//   wood: [
//     {
//       id: 'w1',
//       name: 'Premium Teak Wood',
//       category: 'Hardwood',
//       image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&q=80&w=1600',
//       price: 2800,
//       unit: 'per sqft',
//       specifications: {
//         type: 'Hardwood',
//         density: 'High',
//         grain: 'Straight',
//         color: 'Golden Brown'
//       },
//       uses: ['Outdoor furniture', 'Decking', 'Marine applications'],
//       dimensions: ['4x8 ft', '6x8 ft', '8x8 ft'],
//       grade: 'A-Grade',
//       availability: true
//     },
//     {
//       id: 'w2',
//       name: 'Pine Wood Planks',
//       category: 'Softwood',
//       image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&q=80&w=1600',
//       price: 850,
//       unit: 'per sqft',
//       specifications: {
//         type: 'Softwood',
//         density: 'Medium',
//         grain: 'Even',
//         color: 'Light Yellow'
//       },
//       uses: ['Interior furniture', 'Flooring', 'Wall panels'],
//       dimensions: ['4x8 ft', '6x8 ft'],
//       grade: 'B-Grade',
//       availability: true
//     }
//   ],
//   furniture: [
//     {
//       id: 'f1',
//       name: 'Modern Cabinet Set',
//       category: 'Pre-fabricated',
//       image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600',
//       price: 12500,
//       unit: 'per set',
//       specifications: {
//         material: 'MDF with Veneer',
//         finish: 'Matte',
//         style: 'Contemporary'
//       },
//       components: ['Doors', 'Shelves', 'Hardware'],
//       dimensions: ['W: 200cm', 'H: 180cm', 'D: 60cm'],
//       availability: true
//     },
//     {
//       id: 'f2',
//       name: 'Wardrobe System',
//       category: 'Custom',
//       image: 'https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price: 18000,
//       unit: 'per unit',
//       specifications: {
//         material: 'Engineered Wood',
//         finish: 'High Gloss',
//         style: 'Modern'
//       },
//       components: ['Sliding doors', 'Internal organizers', 'LED lighting'],
//       dimensions: ['Custom sizes available'],
//       availability: true
//     }
//   ],
//   storage: [
//     {
//       id: 's1',
//       name: 'Modular Closet System',
//       category: 'Organization',
//       image: 'https://images.unsplash.com/photo-1687481795360-77c1115d26c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price: 15000,
//       unit: 'per system',
//       specifications: {
//         material: 'Aluminum and MDF',
//         finish: 'Multiple options',
//         style: 'Contemporary'
//       },
//       features: ['Adjustable shelves', 'Pull-out baskets', 'Soft-close hardware'],
//       dimensions: ['Customizable'],
//       availability: true
//     }
//   ]
// };

// type Category = 'all' | 'wood' | 'furniture' | 'storage';
// type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

// export default function Construction() {
//   const [activeCategory, setActiveCategory] = useState<Category>('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState<SortOption>('name-asc');
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);

//   // Flatten all products for easier filtering
//   const allProducts = [
//     ...materials.wood,
//     ...materials.furniture,
//     ...materials.storage
//   ];

//   // Filter products based on category and search query
//   const filteredProducts = allProducts.filter(product => {
//     const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = activeCategory === 'all' || 
//       (activeCategory === 'wood' && materials.wood.some(w => w.id === product.id)) ||
//       (activeCategory === 'furniture' && materials.furniture.some(f => f.id === product.id)) ||
//       (activeCategory === 'storage' && materials.storage.some(s => s.id === product.id));
    
//     return matchesSearch && matchesCategory;
//   });

//   // Sort products
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case 'price-asc':
//         return a.price - b.price;
//       case 'price-desc':
//         return b.price - a.price;
//       case 'name-asc':
//         return a.name.localeCompare(b.name);
//       case 'name-desc':
//         return b.name.localeCompare(a.name);
//       default:
//         return 0;
//     }
//   });

//   return (
//     <div className="min-h-screen bg-neutral-50 font-sans pt-20">
//       {/* Header Navigation */}
//       <div className="fixed top-0 left-0 right-0 bg-neutral-50/95 backdrop-blur-md z-50 border-b border-neutral-200">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center space-x-4 text-sm text-neutral-700">
//             <Link to="/" className="hover:text-neutral-900 transition-colors duration-300">
//               <Home className="h-4 w-4" />
//             </Link>
//             <ChevronRight className="h-4 w-4" />
//             <span className="text-neutral-900 uppercase tracking-widest">Materials</span>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Page Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-tight text-neutral-900">
//             Materials & Solutions
//           </h1>
//           <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
//             Discover our curated selection of premium construction materials and innovative storage solutions, designed for timeless elegance and functionality.
//           </p>
//         </div>

//         {/* Filters and Search */}
//         <div className="bg-neutral-100 rounded-lg p-6 mb-12">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//             {/* Search */}
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
//               <input
//                 type="text"
//                 placeholder="Search materials..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300 text-sm"
//               />
//             </div>

//             {/* Category Filters */}
//             <div className="flex items-center space-x-2">
//               {['all', 'wood', 'furniture', 'storage'].map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category as Category)}
//                   className={`px-4 py-2 rounded-lg text-sm uppercase tracking-widest transition-colors ${
//                     activeCategory === category
//                       ? 'bg-neutral-900 text-neutral-50'
//                       : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-200'
//                   }`}
//                 >
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </button>
//               ))}
//             </div>

//             {/* Sort Options */}
//             <div className="relative">
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value as SortOption)}
//                 className="appearance-none pl-4 pr-10 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300 text-sm text-neutral-700"
//               >
//                 <option value="name-asc">Name (A-Z)</option>
//                 <option value="name-desc">Name (Z-A)</option>
//                 <option value="price-asc">Price (Low to High)</option>
//                 <option value="price-desc">Price (High to Low)</option>
//               </select>
//               <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
//             </div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {sortedProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-neutral-50 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="font-serif text-lg sm:text-xl mb-2 text-neutral-900">{product.name}</h3>
//                 <p className="text-neutral-600 text-sm mb-4">{product.category}</p>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-neutral-900 font-medium">
//                       ₹{product.price.toLocaleString()}
//                     </p>
//                     <p className="text-neutral-500 text-xs">{product.unit}</p>
//                   </div>
//                   <button
//                     onClick={() => setSelectedProduct(product)}
//                     className="text-neutral-900 hover:text-neutral-700 text-sm uppercase tracking-widest transition-colors duration-300"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Product Details Modal */}
//         {selectedProduct && (
//           <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//             <div className="bg-neutral-50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="sticky top-0 bg-neutral-50 border-b border-neutral-200 p-6">
//                 <button
//                   onClick={() => setSelectedProduct(null)}
//                   className="absolute top-6 right-6 text-neutral-500 hover:text-neutral-900 transition-colors"
//                 >
//                   <ArrowLeft className="h-5 w-5" />
//                 </button>
//                 <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900">{selectedProduct.name}</h2>
//                 <p className="text-neutral-600 text-sm">{selectedProduct.category}</p>
//               </div>
//               <div className="p-6">
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div>
//                     <img
//                       src={selectedProduct.image}
//                       alt={selectedProduct.name}
//                       className="w-full h-[350px] sm:h-[400px] object-cover rounded-lg"
//                     />
//                   </div>
//                   <div className="space-y-6">
//                     <div>
//                       <h3 className="font-medium text-lg mb-3 flex items-center text-neutral-900">
//                         <Info className="h-4 w-4 mr-2" />
//                         Specifications
//                       </h3>
//                       <dl className="grid grid-cols-2 gap-4 text-sm">
//                         {Object.entries(selectedProduct.specifications).map(([key, value]) => (
//                           <div key={key}>
//                             <dt className="text-neutral-500 capitalize">{key}</dt>
//                             <dd className="text-neutral-900">{value as string}</dd>
//                           </div>
//                         ))}
//                       </dl>
//                     </div>
//                     {selectedProduct.uses && (
//                       <div>
//                         <h3 className="font-medium text-lg mb-3 flex items-center text-neutral-900">
//                           <Grid className="h-4 w-4 mr-2" />
//                           Common Uses
//                         </h3>
//                         <ul className="list-disc list-inside text-neutral-600 text-sm">
//                           {selectedProduct.uses.map((use: string) => (
//                             <li key={use}>{use}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                     <div>
//                       <h3 className="font-medium text-lg mb-3 flex items-center text-neutral-900">
//                         <Ruler className="h-4 w-4 mr-2" />
//                         Dimensions
//                       </h3>
//                       <ul className="list-disc list-inside text-neutral-600 text-sm">
//                         {(Array.isArray(selectedProduct.dimensions) 
//                           ? selectedProduct.dimensions 
//                           : [selectedProduct.dimensions]
//                         ).map((dim: string) => (
//                           <li key={dim}>{dim}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="pt-6 border-t border-neutral-200">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-neutral-500 text-xs uppercase tracking-wider">Price</p>
//                           <p className="text-xl font-medium text-neutral-900">
//                             ₹{selectedProduct.price.toLocaleString()}
//                             <span className="text-sm text-neutral-500 ml-1">{selectedProduct.unit}</span>
//                           </p>
//                         </div>
//                         <button className="text-neutral-900 hover:text-neutral-700 text-sm uppercase tracking-widest flex items-center space-x-2 transition-colors duration-300">
//                           <Package className="h-4 w-4" />
//                           <span>Request Quote</span>
//                         </button>
                        
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
    
//   );
// }
import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  ArrowLeft,
  ChevronRight,
  Home,
  Grid,
  Ruler,
  Package,
  Info
} from 'lucide-react';

// Product categories and data
const materials = {
  wood: [
    {
      id: 'w1',
      name: 'Premium Teak Wood',
      category: 'Hardwood',
      image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&q=80&w=1600',
      price: 2800,
      unit: 'per sqft',
      specifications: {
        type: 'Hardwood',
        density: 'High',
        grain: 'Straight',
        color: 'Golden Brown'
      },
      uses: ['Outdoor furniture', 'Decking', 'Marine applications'],
      dimensions: ['4x8 ft', '6x8 ft', '8x8 ft'],
      grade: 'A-Grade',
      availability: true
    },
    {
      id: 'w2',
      name: 'Pine Wood Planks',
      category: 'Softwood',
      image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&q=80&w=1600',
      price: 850,
      unit: 'per sqft',
      specifications: {
        type: 'Softwood',
        density: 'Medium',
        grain: 'Even',
        color: 'Light Yellow'
      },
      uses: ['Interior furniture', 'Flooring', 'Wall panels'],
      dimensions: ['4x8 ft', '6x8 ft'],
      grade: 'B-Grade',
      availability: true
    }
  ],
  furniture: [
    {
      id: 'f1',
      name: 'Modern Cabinet Set',
      category: 'Pre-fabricated',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600',
      price: 12500,
      unit: 'per set',
      specifications: {
        material: 'MDF with Veneer',
        finish: 'Matte',
        style: 'Contemporary'
      },
      components: ['Doors', 'Shelves', 'Hardware'],
      dimensions: ['W: 200cm', 'H: 180cm', 'D: 60cm'],
      availability: true
    },
    {
      id: 'f2',
      name: 'Wardrobe System',
      category: 'Custom',
      image: 'https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 18000,
      unit: 'per unit',
      specifications: {
        material: 'Engineered Wood',
        finish: 'High Gloss',
        style: 'Modern'
      },
      components: ['Sliding doors', 'Internal organizers', 'LED lighting'],
      dimensions: ['Custom sizes available'],
      availability: true
    }
  ],
  storage: [
    {
      id: 's1',
      name: 'Modular Closet System',
      category: 'Organization',
      image: 'https://images.unsplash.com/photo-1687481795360-77c1115d26c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 15000,
      unit: 'per system',
      specifications: {
        material: 'Aluminum and MDF',
        finish: 'Multiple options',
        style: 'Contemporary'
      },
      features: ['Adjustable shelves', 'Pull-out baskets', 'Soft-close hardware'],
      dimensions: ['Customizable'],
      availability: true
    }
  ]
};

type Category = 'all' | 'wood' | 'furniture' | 'storage';
type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export default function Construction() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Flatten all products for easier filtering
  const allProducts = [
    ...materials.wood,
    ...materials.furniture,
    ...materials.storage
  ];

  // Filter products based on category and search query
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'wood' && materials.wood.some(w => w.id === product.id)) ||
      (activeCategory === 'furniture' && materials.furniture.some(f => f.id === product.id)) ||
      (activeCategory === 'storage' && materials.storage.some(s => s.id === product.id));
    
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-neutral-50 font-sans pt-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-neutral-50/95 backdrop-blur-md border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4 text-sm text-neutral-700">
            <button className="hover:text-neutral-900 transition-colors duration-300">
              <Home className="h-4 w-4" />
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-neutral-900 uppercase tracking-widest">Materials</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-tight text-neutral-900">
            Materials & Solutions
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Discover our curated selection of premium construction materials and innovative storage solutions, designed for timeless elegance and functionality.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-neutral-100 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                type="text"
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300 text-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center space-x-2">
              {['all', 'wood', 'furniture', 'storage'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as Category)}
                  className={`px-4 py-2 rounded-lg text-sm uppercase tracking-widest transition-colors ${
                    activeCategory === category
                      ? 'bg-neutral-900 text-neutral-50'
                      : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none pl-4 pr-10 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300 text-sm text-neutral-700"
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
              <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-neutral-600 text-sm">
            Showing {sortedProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.availability 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.availability ? 'Available' : 'Out of Stock'}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg sm:text-xl mb-2 text-neutral-900">{product.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{product.category}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-neutral-900 font-medium text-lg">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p className="text-neutral-500 text-xs">{product.unit}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-neutral-900 hover:text-neutral-700 text-sm uppercase tracking-widest transition-colors duration-300 font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <Package className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">No products found</h3>
              <p className="text-neutral-600 text-sm mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-neutral-900 hover:text-neutral-700 text-sm uppercase tracking-widest transition-colors duration-300 font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-neutral-200 p-6">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 text-neutral-500 hover:text-neutral-900 transition-colors"
                  aria-label="Close modal"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 pr-12">{selectedProduct.name}</h2>
                <p className="text-neutral-600 text-sm">{selectedProduct.category}</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-[350px] sm:h-[400px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg mb-3 flex items-center text-neutral-900">
                        <Info className="h-4 w-4 mr-2" />
                        Specifications
                      </h3>
                      <dl className="grid grid-cols-1 gap-3 text-sm">
                        {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-neutral-100">
                            <dt className="text-neutral-500 capitalize font-medium">{key}</dt>
                            <dd className="text-neutral-900">{value as string}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    
                    {selectedProduct.uses && (
                      <div>
                        <h3 className="font-medium text-lg mb-3 flex items-center text-neutral-900">
                          <Grid className="h-4 w-4 mr-2" />
                          Common Uses
                        </h3>
                        <ul className="space-y-2 text-neutral-600 text-sm">
                          {selectedProduct.uses.map((use: string) => (
                            <li key={use} className="flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                              {use}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {selectedProduct.components && (
                      <div>
                        <h3 className="font-medium text-lg mb-3 flex items-center text-neutral-900">
                          <Package className="h-4 w-4 mr-2" />
                          Components
                        </h3>
                        <ul className="space-y-2 text-neutral-600 text-sm">
                          {selectedProduct.components.map((component: string) => (
                            <li key={component} className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                              {component}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="font-medium text-lg mb-3 flex items-center text-neutral-900">
                        <Ruler className="h-4 w-4 mr-2" />
                        Dimensions
                      </h3>
                      <ul className="space-y-2 text-neutral-600 text-sm">
                        {(Array.isArray(selectedProduct.dimensions) 
                          ? selectedProduct.dimensions 
                          : [selectedProduct.dimensions]
                        ).map((dim: string) => (
                          <li key={dim} className="flex items-center">
                            <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                            {dim}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-neutral-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-neutral-500 text-xs uppercase tracking-wider">Price</p>
                          <p className="text-2xl font-medium text-neutral-900">
                            ₹{selectedProduct.price.toLocaleString()}
                            <span className="text-sm text-neutral-500 ml-1">{selectedProduct.unit}</span>
                          </p>
                        </div>
                        <div className="flex space-x-3">
                          <button className="bg-neutral-900 text-white hover:bg-neutral-700 px-6 py-2 rounded-lg text-sm uppercase tracking-widest transition-colors duration-300">
                            Request Quote
                          </button>
                          <button className="border border-neutral-300 text-neutral-900 hover:bg-neutral-50 px-6 py-2 rounded-lg text-sm uppercase tracking-widest transition-colors duration-300">
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}