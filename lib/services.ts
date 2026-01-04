import { LucideIcon, Zap, Calendar, Bell, ThumbsUp, Flower2 } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;

  // Detailed page content
  longDescription: string;
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  benefits: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
  example: {
    scenario: string;
    conversation: Array<{
      role: 'customer' | 'ai';
      message: string;
      time?: string;
    }>;
  };
}

export const services: Service[] = [
  {
    slug: "instant-lead-response",
    icon: Zap,
    title: "Instant Lead Response",
    description: "Respond to new leads in under 60 seconds, even when you're on a job. Never lose a customer to slow response times again.",
    gradient: "from-primary/20 to-primary-light/20",
    longDescription: "In the service industry, speed is everything. Research shows that 78% of customers choose the business that responds first. Our AI-powered lead response system ensures you never miss an opportunity, responding to inquiries in under 60 seconds—24/7, even when you're on a job, after hours, or on weekends.",
    howItWorks: [
      {
        step: 1,
        title: "Lead Notification",
        description: "Customer submits a quote request through your website, Facebook, Google, or calls your business line."
      },
      {
        step: 2,
        title: "Instant AI Response",
        description: "Within 60 seconds, our AI sends a personalized message acknowledging their inquiry and gathering key details."
      },
      {
        step: 3,
        title: "Information Collection",
        description: "AI asks relevant questions about their property size, service needs, and preferred timing to qualify the lead."
      },
      {
        step: 4,
        title: "Scheduling & Handoff",
        description: "Qualified leads are automatically scheduled for estimates or added to your CRM with all collected information."
      }
    ],
    benefits: [
      "Capture 78% more leads by being the first to respond",
      "Never lose customers to competitors who respond faster",
      "24/7 availability—nights, weekends, and holidays",
      "Qualify leads automatically before they reach you",
      "Eliminate the stress of constant phone monitoring",
      "Professional, consistent responses every single time"
    ],
    stats: [
      { value: "<60 sec", label: "Average response time" },
      { value: "78%", label: "Lead capture increase" },
      { value: "24/7", label: "Always available" }
    ],
    example: {
      scenario: "Weekend lawn care inquiry from homeowner",
      conversation: [
        {
          role: 'customer',
          message: "Hi, I need someone to mow my lawn this week. Can you help?",
          time: "Sat 8:45 PM"
        },
        {
          role: 'ai',
          message: "Thanks for reaching out! We'd love to help with your lawn care. To give you an accurate quote, can you tell me the approximate size of your lawn? (Small: <5,000 sq ft, Medium: 5-10k, Large: >10k)",
          time: "Sat 8:45 PM"
        },
        {
          role: 'customer',
          message: "It's about 7,000 sq ft",
          time: "Sat 8:47 PM"
        },
        {
          role: 'ai',
          message: "Perfect! For a 7,000 sq ft lawn, our standard mow & edge service is $45. We have availability this Tuesday or Thursday. Would either of those days work for you?",
          time: "Sat 8:47 PM"
        },
        {
          role: 'customer',
          message: "Thursday works great!",
          time: "Sat 8:49 PM"
        },
        {
          role: 'ai',
          message: "Excellent! I've got you scheduled for Thursday. You'll receive a confirmation text tomorrow morning with your appointment window. Looking forward to taking care of your lawn! 🌱",
          time: "Sat 8:49 PM"
        }
      ]
    }
  },
  {
    slug: "smart-quote-followups",
    icon: Calendar,
    title: "Smart Quote Follow-Ups",
    description: "Automatic follow-ups on day 3, 6, and 7 to turn 30-40% close rates into 50-60%. Stop leaving money on the table.",
    gradient: "from-gold/20 to-gold-light/20",
    longDescription: "Most service businesses lose 60% of potential customers simply because they don't follow up. Industry data shows that strategic follow-ups can increase quote conversion rates from 30-40% to 50-60%. Our smart follow-up system automatically nurtures leads at optimal intervals, using proven messaging that converts without being pushy.",
    howItWorks: [
      {
        step: 1,
        title: "Quote Delivered",
        description: "You send a quote to a customer. Our system automatically begins tracking the follow-up sequence."
      },
      {
        step: 2,
        title: "Day 3 Check-In",
        description: "Friendly message asking if they have questions about the quote. Casual, helpful tone that builds rapport."
      },
      {
        step: 3,
        title: "Day 6 Value Reminder",
        description: "Highlight the value of your service and address common objections. Share social proof or seasonal urgency."
      },
      {
        step: 4,
        title: "Day 7 Final Touch",
        description: "Last chance message with subtle urgency (schedule filling up, seasonal timing) to encourage decision."
      }
    ],
    benefits: [
      "Increase quote close rates from 30-40% to 50-60%",
      "Recover thousands in lost revenue every month",
      "Automated system requires zero effort from you",
      "Perfectly timed messages based on industry best practices",
      "Non-pushy, professional tone that builds trust",
      "Track which messages convert best and optimize over time"
    ],
    stats: [
      { value: "50-60%", label: "Close rate achieved" },
      { value: "3x", label: "Follow-ups per quote" },
      { value: "$12k+", label: "Avg. annual recovery" }
    ],
    example: {
      scenario: "Lawn fertilization quote follow-up sequence",
      conversation: [
        {
          role: 'ai',
          message: "Hi Sarah! Just wanted to check in on the fertilization quote I sent over on Monday. Do you have any questions about our 4-step program or the pricing?",
          time: "Day 3 (Thursday)"
        },
        {
          role: 'customer',
          message: "Not really, just trying to decide between a few companies",
          time: "Thursday 2:15 PM"
        },
        {
          role: 'ai',
          message: "Totally understand! The main thing that sets our program apart is the slow-release organic blend—it's safer for kids and pets, and you'll see greener results that last 8-10 weeks instead of 4-6. Plus, we've treated over 200 lawns in your neighborhood already. Happy to answer anything specific!",
          time: "Day 6 (Sunday)"
        },
        {
          role: 'customer',
          message: "That's actually really helpful. What's your next availability?",
          time: "Sunday 4:30 PM"
        },
        {
          role: 'ai',
          message: "Great question! We're booking the first spring application now for mid-March. I have Tuesday the 14th or Thursday the 16th open. After that, we're pretty booked until April. Which works better for you?",
          time: "Sunday 4:31 PM"
        }
      ]
    }
  },
  {
    slug: "job-updates",
    icon: Bell,
    title: "Job Updates & Notifications",
    description: "Pre-service reminders, ETAs, and weather delay notifications keep your customers informed and happy.",
    gradient: "from-accent-blue/20 to-primary-light/20",
    longDescription: "Customer anxiety is real. 'When are they coming?' 'Did they forget about me?' Proactive communication eliminates these concerns and dramatically improves customer satisfaction. Our automated notification system keeps customers informed at every step, reducing no-shows by 40% and support calls by 65%.",
    howItWorks: [
      {
        step: 1,
        title: "24-Hour Reminder",
        description: "Day before service, customers receive a confirmation reminder with scheduled time window and any prep instructions."
      },
      {
        step: 2,
        title: "On-the-Way Alert",
        description: "Morning of service, automated message confirms the crew is on schedule with estimated arrival time."
      },
      {
        step: 3,
        title: "Real-Time Updates",
        description: "If running late or weather delays occur, customers are notified immediately with new expectations."
      },
      {
        step: 4,
        title: "Completion Notice",
        description: "Service completed notification with summary of work done and any follow-up care instructions."
      }
    ],
    benefits: [
      "Reduce no-shows and gate code issues by 40%",
      "Eliminate 'where are you?' phone calls and texts",
      "Improve customer satisfaction and reviews",
      "Professional image with proactive communication",
      "Automatic weather delay notifications",
      "Free up your time from constant status updates"
    ],
    stats: [
      { value: "40%", label: "Fewer no-shows" },
      { value: "65%", label: "Fewer support calls" },
      { value: "4.8/5", label: "Avg. service rating" }
    ],
    example: {
      scenario: "Weekly lawn mowing service communication",
      conversation: [
        {
          role: 'ai',
          message: "Hi Mike! Just a reminder that your weekly lawn service is scheduled for tomorrow (Thursday) between 9 AM - 12 PM. Please make sure the back gate is unlocked. See you then! 🌱",
          time: "Wed 6:00 PM"
        },
        {
          role: 'ai',
          message: "Good morning! Our crew is on schedule and should arrive at your property around 10:30 AM today. Thanks for being a great customer!",
          time: "Thu 8:15 AM"
        },
        {
          role: 'ai',
          message: "We've finished up your lawn service! Mowed, edged, and blew off all hard surfaces. Everything's looking great. Your next service is scheduled for next Thursday. Have a wonderful day!",
          time: "Thu 10:55 AM"
        }
      ]
    }
  },
  {
    slug: "review-generation",
    icon: ThumbsUp,
    title: "Automatic Review Generation",
    description: "Post-job thank-you messages and review requests automatically generate 6-10+ five-star reviews every month.",
    gradient: "from-accent-green/20 to-gold/20",
    longDescription: "Online reviews are the lifeblood of local service businesses. Companies with 50+ recent reviews get 3x more leads than those with fewer than 10. Our system makes review generation effortless, automatically sending perfectly-timed requests that feel personal and generate 6-10+ new five-star reviews every single month.",
    howItWorks: [
      {
        step: 1,
        title: "Service Completion",
        description: "Immediately after job completion, system logs the service and starts the review sequence timer."
      },
      {
        step: 2,
        title: "Thank You Message",
        description: "4-6 hours later, send warm thank-you message checking satisfaction. Non-intrusive, builds goodwill."
      },
      {
        step: 3,
        title: "Review Request (Happy Customers)",
        description: "If customer responds positively, immediately send easy link to leave a Google/Facebook review."
      },
      {
        step: 4,
        title: "Issue Resolution (Concerns)",
        description: "If customer mentions any concern, alert you privately for resolution before it becomes a public review."
      }
    ],
    benefits: [
      "Generate 6-10+ five-star reviews every month on autopilot",
      "Catch unhappy customers before they leave negative reviews",
      "Boost your local SEO and search rankings",
      "Build social proof that converts more leads",
      "Personalized messages that don't feel automated",
      "Works across Google, Facebook, Yelp, and more"
    ],
    stats: [
      { value: "6-10+", label: "Reviews per month" },
      { value: "48%", label: "Response rate" },
      { value: "4.9/5", label: "Average rating" }
    ],
    example: {
      scenario: "Post-service review generation for landscape installation",
      conversation: [
        {
          role: 'ai',
          message: "Hi Jennifer! We just finished your new flower bed installation. How does everything look? We want to make sure you're 100% happy! 🌺",
          time: "4 hours after completion"
        },
        {
          role: 'customer',
          message: "It looks amazing!! You guys did such a great job, way better than I imagined!",
          time: "15 minutes later"
        },
        {
          role: 'ai',
          message: "That's wonderful to hear! 😊 We'd be so grateful if you could share your experience with a quick Google review. It really helps other homeowners find us. Here's the link: [review link]. Thanks for being such a great customer!",
          time: "1 minute later"
        },
        {
          role: 'customer',
          message: "Just left you a 5-star review! You earned it!",
          time: "10 minutes later"
        },
        {
          role: 'ai',
          message: "You're the best! Thank you so much, Jennifer. Can't wait to help with your next project! 🙏",
          time: "1 minute later"
        }
      ]
    }
  },
  {
    slug: "seasonal-upsells",
    icon: Flower2,
    title: "Seasonal Upsells & Reminders",
    description: "Automated messages to past customers when it's time for seasonal services. Turn one-time customers into repeat business.",
    gradient: "from-gold-dark/20 to-primary/20",
    longDescription: "Your best customers are the ones you've already served. Seasonal upsell automation turns one-time jobs into recurring revenue by reminding past customers when it's time for seasonal services. Industry research shows that retention marketing is 5-7x more cost-effective than new customer acquisition.",
    howItWorks: [
      {
        step: 1,
        title: "Service History Tracking",
        description: "System remembers every service provided and automatically tags customers for relevant seasonal offerings."
      },
      {
        step: 2,
        title: "Seasonal Triggers",
        description: "Based on calendar dates and local weather, triggers activate for spring cleanup, fall aeration, winterization, etc."
      },
      {
        step: 3,
        title: "Personalized Outreach",
        description: "Customers receive personalized messages mentioning their specific property and past services."
      },
      {
        step: 4,
        title: "Easy Booking",
        description: "One-click booking links make it effortless for customers to schedule. No back-and-forth required."
      }
    ],
    benefits: [
      "Turn one-time customers into repeat annual clients",
      "Increase customer lifetime value by 3-5x",
      "Predictable seasonal revenue from existing customer base",
      "Zero cold outreach—only message people you've served",
      "Perfectly timed based on weather and calendar",
      "Automated campaigns that run year after year"
    ],
    stats: [
      { value: "35%", label: "Conversion rate" },
      { value: "3-5x", label: "Increased LTV" },
      { value: "7x", label: "More cost-effective" }
    ],
    example: {
      scenario: "Spring aeration reminder to previous customer",
      conversation: [
        {
          role: 'ai',
          message: "Hey Tom! Spring is here 🌱 and it's the perfect time for lawn aeration. We did your fall cleanup last year—your lawn is probably ready for aeration to help with drainage and root growth. Want to get on the schedule?",
          time: "March 15"
        },
        {
          role: 'customer',
          message: "Oh yeah, that's a good idea. What's the pricing?",
          time: "20 minutes later"
        },
        {
          role: 'ai',
          message: "For your property size (about 8,000 sq ft), aeration is $95. We're booking mid-late March right now. I can get you on the calendar for March 22nd or 24th. Which works better?",
          time: "2 minutes later"
        },
        {
          role: 'customer',
          message: "22nd works. Sign me up!",
          time: "5 minutes later"
        },
        {
          role: 'ai',
          message: "Perfect! You're all set for Friday, March 22nd. We'll send a reminder the day before. Thanks Tom—looking forward to helping your lawn thrive this year! 💚",
          time: "1 minute later"
        }
      ]
    }
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
