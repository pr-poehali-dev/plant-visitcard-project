import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const plants = [
  {
    id: 1,
    name: "Монстера деликатесная",
    category: "Крупнолистные",
    price: "450 ₽",
    minOrder: "от 50 шт",
    image: "/placeholder.svg",
    description: "Популярное декоративное растение с крупными резными листьями",
  },
  {
    id: 2,
    name: "Фикус Бенджамина",
    category: "Деревья",
    price: "320 ₽",
    minOrder: "от 100 шт",
    image: "/placeholder.svg",
    description: "Классическое офисное растение, неприхотливое в уходе",
  },
  {
    id: 3,
    name: "Сансевиерия",
    category: "Суккуленты",
    price: "280 ₽",
    minOrder: "от 75 шт",
    image: "/placeholder.svg",
    description: "Очищает воздух, идеально для офисов и жилых помещений",
  },
  {
    id: 4,
    name: "Потос золотистый",
    category: "Ампельные",
    price: "200 ₽",
    minOrder: "от 100 шт",
    image: "/placeholder.svg",
    description: "Быстрорастущее вьющееся растение с яркими листьями",
  },
];

export default function PlantsCatalog() {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Популярные растения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент качественных горшечных растений для оптовой
            продажи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <Card
              key={plant.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-plant-orange text-white px-2 py-1 rounded-full text-sm font-medium">
                  {plant.minOrder}
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                      {plant.name}
                    </CardTitle>
                    <p className="text-sm text-plant-green font-medium">
                      {plant.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-plant-orange">
                      {plant.price}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {plant.description}
                </p>
                <Button className="w-full bg-plant-green hover:bg-green-600 text-white">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить в заказ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-plant-green text-plant-green hover:bg-plant-green hover:text-white px-8"
          >
            <Icon name="Eye" size={20} className="mr-2" />
            Смотреть весь каталог (200+ растений)
          </Button>
        </div>
      </div>
    </section>
  );
}
