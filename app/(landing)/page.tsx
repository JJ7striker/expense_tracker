import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Captions, Tag, Wallet, ChartNoAxesColumnIncreasing, ShieldKeyhole, Cloud } from 'lucide-react';

export default function Home() {
  const cards = [
    {
      id: 1,
      icon: Captions,
      title: "Track Transactions",
      description: "Easily add and manage your income and expenses in real time"
    },
    {
      id: 2,
      icon: Tag,
      title: "Smart Categories",
      description: "Organize your spending with custom categories."
    },
    {
      id: 3,
      icon: Wallet,
      title: "Set Budgets",
      description: "Set monthly budgets and stay on track with your goals"
    },
    {
      id: 4,
      icon: ChartNoAxesColumnIncreasing,
      title: "Visual Reports",
      description: "Get clear insights with beautiful charts and summaries"
    },
    {
      id: 5,
      icon: ShieldKeyhole,
      title: "Secure & Private",
      description: "Your data is safe and secure with authentication"
    },
    {
      id: 6,
      icon: Cloud,
      title: "Access anywhere",
      description: "Use it from any device, anytime, anywhere"
    },
  ]
  return (
    <div className="px-3 py-4">
     <section className="w-full px-4 py-4 flex flex-col md:flex-row justify-between gap-5 items-center">
      <div className="flex-1 w-full flex flex-col gap-3 space-y-7">
        <h2 className="text-3xl md:text-4xl font-bold">Take control of your money, build a <span className="text-blue-600">better tomorrow</span></h2>
        <p className="text-sm md:text-lg font-medium text-gray-600">Expense tracker helps you track your income and expenses sort budgets and reach your financial goals - all in one place.</p>

        <div className="w-full flex flex-col md:flex-row items-center gap-4">
                  <Button className="bg-blue-600 hover:bg-white hover:text-black md:flex-1 w-full hover:shadow-sm hover:shadow-gray-500">Get Started For Free</Button>
                  <Button className="bg-white hover:bg-blue-600 hover:text-white text-black shadow-sm shadow-gray-500 md:flex-1 w-full">Learn More</Button>
        </div>

      </div>
      <Image src="/landing-image1.png" alt="Landing Page Image" width={400} height={600} className="object-contain flex-1 w-full" />
     </section>

     <section className="w-full h-auto mt-20">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-700">Simple, Powerful, Made For You</h2>
      <p className="mt-4 text-center font-medium text-gray-700">Everything you need to take care of your finances, without the complexity. Designed to be easy, clean and effective.</p>

      <div className="mt-7 w-full grid grid-cols-1 md:grid-cols-3 px-4 py-2 gap-5">
        {cards.map(card => {
          const Icon = card.icon;
          return (
          <div key={card.id} className="w-full flex flex-col gap-3 shadow-xs shadow-gray-600 px-3 py-4 items-start rounded-sm">
            <Icon className="text-blue-500 size-7 md:size-8" />
            <h4 className="text-base md:text-lg font-bold text-gray-600">{card.title}</h4>
            <p className="text-sm text-blue-500 font-medium">{card.description}</p>

          </div>
          )
        })}
      </div>
     </section>
    </div>
  );
}
