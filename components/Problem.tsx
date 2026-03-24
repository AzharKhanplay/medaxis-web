import { FileX, Clock, AlertCircle } from "lucide-react";

export function Problem() {
  const challenges = [
    {
      icon: FileX,
      title: "Paper-Based Systems",
      description: "Manual record-keeping leads to lost documents, errors, and inefficiency in patient care."
    },
    {
      icon: Clock,
      title: "Slow Processes",
      description: "Time-consuming administrative tasks reduce the time available for actual patient care."
    },
    {
      icon: AlertCircle,
      title: "Data Mismanagement",
      description: "Scattered information makes it difficult to track patient history and make informed decisions."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Critical Challenges in Hospital Management</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Traditional systems create barriers to efficient patient care and operational excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
                <challenge.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{challenge.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}