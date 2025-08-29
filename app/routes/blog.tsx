import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiClock, FiFolder, FiArrowRight } from "react-icons/fi";
import BlogLayout from "~/components/blog/BlogLayout";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const categories = ["Todas", "Tecnología", "Diseño", "Negocios", "Salud"];

  const recentArticles = [
    {
      title: "Cómo la IA está transformando el mundo",
      excerpt:
        "Explora las últimas tendencias en inteligencia artificial y su impacto en diversas industrias.",
      image: "https://via.placeholder.com/300",
      category: "Tecnología",
      readTime: "5 min",
      id: "1",
    },
    {
      title: "Diseño UX: Mejores prácticas para 2023",
      excerpt:
        "Descubre las tendencias más importantes en diseño de experiencia de usuario para este año.",
      image: "https://via.placeholder.com/300",
      category: "Diseño",
      readTime: "4 min",
      id: "2",
    },
    {
      title: "Estrategias de marketing digital efectivas",
      excerpt:
        "Aprende cómo implementar estrategias de marketing digital que realmente funcionen.",
      image: "https://via.placeholder.com/300",
      category: "Negocios",
      readTime: "6 min",
      id: "3",
    },
    {
      title: "Beneficios de una alimentación saludable",
      excerpt:
        "Conoce los beneficios de llevar una dieta equilibrada y saludable.",
      image: "https://via.placeholder.com/300",
      category: "Salud",
      readTime: "3 min",
      id: "4",
    },
    {
      title: "El futuro del trabajo remoto",
      excerpt:
        "Analizamos cómo el trabajo remoto está cambiando la forma en que colaboramos.",
      image: "https://via.placeholder.com/300",
      category: "Tecnología",
      readTime: "5 min",
      id: "5",
    },
    {
      title: "Tendencias en diseño gráfico para 2023",
      excerpt:
        "Un vistazo a las tendencias emergentes en el mundo del diseño gráfico.",
      image: "https://via.placeholder.com/300",
      category: "Diseño",
      readTime: "4 min",
      id: "6",
    },
  ];

  const filteredArticles = recentArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "Todas" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <BlogLayout
      sidebar={
        <div className="sticky top-28">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Categorías
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${activeCategory === category
                      ? "bg-primary-500 text-white font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      }
      content={
        <div className="space-y-6">
          {/* Barra de búsqueda */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          {/* Artículos */}
          {filteredArticles.length > 0 ? (
            <div className="space-y-6">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        src={article.image}
                        alt={article.title}
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <FiFolder className="h-4 w-4" />
                          <span>{article.category}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <FiClock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <motion.a
                          whileHover={{ x: 3 }}
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
                        >
                          Leer más <FiArrowRight className="ml-1" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 rounded-lg border border-gray-200 text-center"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron artículos
              </h3>
              <p className="text-gray-600 mb-4">
                {searchQuery
                  ? `No hay resultados para "${searchQuery}"`
                  : `No hay artículos en la categoría "${activeCategory}"`}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Todas");
                }}
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Mostrar todos los artículos
              </motion.button>
            </motion.div>
          )}
        </div>
      }
    />
  );
};

export default BlogPage;
