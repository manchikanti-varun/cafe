"use client"


import Image from "next/image"
import { motion } from "framer-motion"


export default function Menu() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-[url('/cafe-interior.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl font-bold md:text-6xl">Our Menu</h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#CDB090]"></div>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic">
            A culinary journey through the authentic flavors of Tamil Nadu
          </p>
        </div>
      </section>


      {/* Hot Beverages Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/hot-beverages.jpg')] bg-cover bg-fixed bg-center bg-no-repeat opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Hot Beverages</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#653A2A]">
              Warm your soul with our traditional brews, each cup carrying the essence of Tamil Nadu's rich heritage
            </p>
          </motion.div>


          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Milk",
                description: "Fresh and creamy milk served hot or cold as per your preference",
                image: "/milk.jpg",
              },
              {
                name: "Thoothukudi Chai",
                description: "Our signature spiced tea with cardamom, ginger, and a hint of cinnamon",
                image: "/Thoothukudi_Chai.jpg",
              },
              {
                name: "Thoothukudi Diet Herbal Tea (Ginger Special Instant Herbal Tea)",
                description: "A healthy and refreshing blend with ginger, crafted for wellness and fitness",
                image: "/ThoothukudiDietHerbalTea.jpg",
              },
              {
                name: "Thoothukudi Dawachai (Forestly Collected Herbs)",
                description: "Traditional medicinal tea made with wild herbs, perfect for immunity and cold seasons",
                image: "/Thoothukudi_Dawachai.jpg",
              },
              {
                name: "Thoothukudi Coffee (Thati Bellam Sonti Coffee)",
                description: "Authentic South Indian filter coffee brewed with palm jaggery and dry ginger",
                image: "/filter-coffee.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">{item.name}</h3>
                  </div>
                  <p className="mt-2 text-[#653A2A]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Millet Delights Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/millet-delight.jpg')] bg-cover bg-fixed bg-center bg-no-repeat opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Millet Delights</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#653A2A]">
              Wholesome millet dishes for a nourishing and flavorful experience
            </p>
          </motion.div>


          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Millet Sambar Rice",
                description: "Nutritious millet rice cooked with flavorful sambar and traditional spices",
                image: "/millet-sambar-rice.jpg",
              },
              {
                name: "Samalu Curd Rice",
                description: "Cooling curd rice made with wholesome samalu (little millet) for a light meal",
                image: "/samalu-curd-rice.jpg",
              },
              {
                name: "Millet Curd Rice",
                description: "Creamy curd rice blended with healthy millets for a refreshing and filling dish",
                image: "/millet-curd-rice.jpg",
              },
              {
                name: "Millet Idly",
                description: "Soft, fluffy idlis made with a blend of millets, perfect for a healthy breakfast",
                image: "/millet-idly.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">{item.name}</h3>
                  </div>
                  <p className="mt-2 text-[#653A2A]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Fresh Bites Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/farm-fresh.jpg')] bg-cover bg-fixed bg-center bg-no-repeat opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Farm Fresh Bites</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#653A2A]">
              Straight from the farm to your plate — enjoy the authentic flavors of country-style chicken and farm-fresh
              eggs
            </p>
          </motion.div>


          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Country Chicken Boiled Egg",
                description: "Fresh farm egg served either boiled or as a fluffy omelette",
                image: "/egg.jpg",
              },
              {
                name: "Country Chicken Egg (Omelette)",
                description: "Fresh farm egg served either boiled or as a fluffy omelette",
                image: "/Omelette.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">{item.name}</h3>
                  </div>
                  <p className="mt-2 text-[#653A2A]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Beverages Section */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Cold Beverages</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#653A2A]">
              Refreshing cold drinks to cool you down, made with fresh ingredients and traditional recipes
            </p>
          </motion.div>


          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {
              [
                {
                  name: "Dry Fruit Shake",
                  description: "A luxurious blend of premium dry fruits, milk, and a hint of cardamom",
                  image: "/dry-fruit-shake.jpg",
                },
                {
                  name: "Badam Milk",
                  description: "Creamy almond-infused milk with saffron and cardamom, served chilled",
                  image: "/badam-milk.jpg",
                },
                {
                  name: "Pulpy Grape Juice",
                  description: "Freshly squeezed grape juice with natural pulp for authentic flavor",
                  image: "/grape-juice.jpg",
                },
                {
                  name: "Coconut Cream Shake",
                  description: "Smooth and refreshing coconut shake with a hint of vanilla",
                  image: "/coconut-cream-shake.jpg",
                },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">{item.name}</h3>
                  </div>
                  <p className="mt-2 text-[#653A2A]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shot Bites Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/shot-bites.jpg')] bg-cover bg-fixed bg-center bg-no-repeat opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Shot Bites</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#653A2A]">
              Perfect companions to our beverages, these small bites pack a flavorful punch
            </p>
          </motion.div>


          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Onion Samosa",
                description: "Crispy mini samosas filled with spiced onions, perfect for snacking",
                image: "/samosa.jpg",
              },
              {
                name: "Corn Samosa",
                description: "Golden fried samosas stuffed with sweet corn and mild spices",
                image: "/samosa.jpg",
              },
              {
                name: "Paneer Puff",
                description: "Flaky pastry filled with spiced cottage cheese and vegetables",
                image: "/puff.jpg",
              },
              {
                name: "Egg Puff",
                description: "Buttery pastry filled with a delicious spicy egg masala",
                image: "/puff.jpg",
              },
              {
                name: "Chicken Puff",
                description: "Our bestseller with tender spiced chicken wrapped in buttery layers",
                image: "/puff.jpg",
              },
              {
                name: "Veg Sandwich",
                description: "Fresh vegetables with our special chutney on homemade bread",
                image: "/veg-sandwich.jpg",
              },
              {
                name: "Paneer Sandwich",
                description: "Soft bread stuffed with spiced paneer and fresh vegetables",
                image: "/paneer-sandwich.jpg",
              },
              {
                name: "Chicken Sandwich",
                description: "Juicy chicken with crunchy veggies in a flavorful sandwich",
                image: "/chicken-sandwich.jpg",
              },
              {
                name: "Millet Cutlet",
                description: "Healthy and delicious patties made with local millets and spices",
                image: "/millet-cutlet.jpg",
              },
              {
                name: "Chicken Cutlet",
                description: "Crispy cutlets filled with spiced minced chicken, fried to perfection",
                image: "/chicken-cutlet.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">{item.name}</h3>
                  </div>
                  <p className="mt-2 text-[#653A2A]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Millet Magic Combos Section */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">
              Millet Magic Combos
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#653A2A]">
              Nutritious and delicious combinations featuring our signature millet dishes
            </p>
          </motion.div>


          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
                {
                  name: "Sambar Rice × Omelette Bliss",
                  description: "Our nutritious millet sambar rice paired with a perfectly cooked country egg omelette",
                  image: "/sambar-omelette.jpg",
                },
                {
                  name: "Sambar Rice × Crispy Potato Fry",
                  description: "Millet sambar rice served with crispy spiced potato fry",
                  image: "/sambar-potato.jpg",
                },
                {
                  name: "Chai Vibes + Millet Cutlet",
                  description: "Our signature chai paired with a healthy millet cutlet",
                  image: "/chai-millet-cutlet.jpg",
                },
                {
                  name: "Chai Vibes + Chicken Cutlet",
                  description: "Our signature chai paired with a spicy chicken cutlet",
                  image: "/chai-millet-cutlet.jpg",
                },
                {
                  name: "Chai Break + Onion Samosa",
                  description: "Perfect tea-time combo with our spicy onion samosa",
                  image: "/chai-corn-samosa.jpg",
                },
                {
                  name: "Chai Break + Corn Samosa",
                  description: "Our aromatic chai with a crispy corn-filled samosa",
                  image: "/chai-corn-samosa.jpg",
                },
                {
                  name: "Your Choice: Rice & Sweet Treat",
                  description: "Choose any rice dish and pair it with a dessert of your choice",
                  image: "/rice-sweet-combo.jpg",
                },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">{item.name}</h3>
                  </div>
                  <p className="mt-2 text-[#653A2A]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Desserts Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/desserts.jpg')] bg-cover bg-fixed bg-center bg-no-repeat opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">Desserts</h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#653A2A]">
              Sweet endings to your meal, crafted with traditional recipes and a touch of innovation
            </p>
          </motion.div>


          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Coconut Pudding",
                description: "Creamy coconut pudding with a hint of cardamom and topped with toasted coconut flakes",
                image: "/Coconut_Pudding.jpg",
              },
              {
                name: "Millet Lapsi",
                description: "Traditional sweet dish made with millet, ghee, jaggery, and dry fruits",
                image: "/Millet_Lapsi.jpg",
              },
              {
                name: "Mango Delight",
                description: "Seasonal mango dessert with layers of cream and mango pulp, topped with pistachios",
                image: "/Mango_Delight.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">{item.name}</h3>
                  </div>
                  <p className="mt-2 text-[#653A2A]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* A Bite Full of Memories Section */}
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-serif text-3xl font-bold text-[#4D281F] md:text-4xl">
              A Bite Full of Memories
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#91604F]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#653A2A]">
              Our signature creations that have stood the test of time and won countless hearts
            </p>
          </motion.div>


          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Legendary Sponge Cake",
                description:
                  "Our iconic recipe since 1995, this light and airy cake has a secret ingredient that makes it unforgettable",
                image: "/sponge-cake.jpg",
                story:
                  "This recipe traveled with our founder from his grandmother's kitchen, carrying with it memories of childhood and family gatherings.",
              },
              {
                name: "Famous Kova Bun",
                description: "Soft bun filled with our special milk-based sweet filling, a perfect tea-time companion",
                image: "/kova_bun.png",
                story:
                  "Created during a particularly challenging time, this recipe symbolizes resilience and creativity in the face of adversity.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#4D281F]">{item.name}</h3>
                  </div>
                  <p className="mt-2 text-[#653A2A]">{item.description}</p>
                  <div className="mt-4 rounded-lg bg-[#F9F5F0] p-3">
                    <p className="font-serif italic text-[#653A2A]">{item.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
