import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-plant-light to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-center text-green-500">
              Оптовая продажа
              <span className="block text-plant-green">домашних растений</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Качественные горшечные растения для вашего бизнеса. Огромный выбор
              под заказ.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-plant-green hover:bg-green-600 text-white px-8"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Посмотреть каталог
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-plant-orange text-plant-orange hover:bg-plant-orange hover:text-white px-8"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-plant-green/10 rounded-full p-8 backdrop-blur-sm">
              <img
                src="/placeholder.svg"
                alt="Коллекция домашних растений"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
