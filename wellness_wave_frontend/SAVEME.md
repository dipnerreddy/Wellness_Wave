import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';


export default function BentoGridDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-green-200 p-10 text-center">
      <BentoGrid className="max-w-6xl mx-auto grid-cols-4 md:auto-rows-[22rem] gap-6">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={gridClasses[i] || ''}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: 'Social Challenges',
    description: 'Understanding and tackling social issues through technology.',
    // header: <img src="./assets/social-challenges.png" alt="Social Challenges" className="w-full h-full object-cover rounded-xl" />, 
    header: <img src="/images/social-challenges.png" alt="Social Challenges" className="w-full h-full object-cover rounded-xl" />,
    icon: <span className="text-lg">🌍</span>,
  },
  {
    title: 'AI-Driven Insights',
    description: 'Harnessing AI to provide meaningful health analytics.',
    header: <img src="/images/ai-insights.png" alt="AI-Driven Insights" className="w-full h-full object-cover rounded-xl" />, 
    icon: <span className="text-lg">🤖</span>,
  },
  {
    title: 'Real-Time Tracking',
    description: 'Monitor your health data in real-time for better decisions.',
    header: <img src="/images/real-time-tracking.png" alt="Real-Time Tracking" className="w-full h-full object-cover rounded-xl" />, 
    icon: <span className="text-lg">📊</span>,
  },
  {
    title: 'Secure Health Data',
    description: 'Ensuring your health records remain private and protected.',
    header: <img src="/images/secure-health-data.png" alt="Secure Health Data" className="w-full h-full object-cover rounded-xl" />, 
    icon: <span className="text-lg">🔒</span>,
  }
];

const gridClasses = [
  'col-span-2 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
];
