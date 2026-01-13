import { Clock, TrendingUp, MessageSquare, Star } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            <span className="text-muted-foreground">Don't just hope for reviews...</span><br />
            <span className="text-foreground">Generate them reliably!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Save 10+ Hours Per Week</h3>
            <p className="text-muted-foreground">No more manually asking customers for reviews. Everything happens automatically after each appointment.</p>
          </div>

          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">3x More Reviews</h3>
            <p className="text-muted-foreground">Our customers see an average 300% increase in Google reviews within the first month.</p>
          </div>

          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">98% Open Rate</h3>
            <p className="text-muted-foreground">SMS gets read. Email gets ignored. Reach customers where they actually look.</p>
          </div>

          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Climb the Rankings</h3>
            <p className="text-muted-foreground">More reviews help you outrank your competition and attract more customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;