'use client';

import { Button } from './Button';

export default function ButtonShowcase() {
  return (
    <div className="p-8 space-y-12 bg-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h2-desktop text-midnight mb-8">
          AutoMäklaren Button Components
        </h1>

        {/* Primary Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-charcoal mb-4">
            Primary (CTA)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="sm">
              Få värdering →
            </Button>
            <Button variant="primary" size="md">
              Få värdering →
            </Button>
            <Button variant="primary" size="lg">
              Få värdering →
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" loading>
              Loading
            </Button>
          </div>
        </section>

        {/* Secondary Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-charcoal mb-4">
            Secondary (Outline Blue)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="secondary" size="sm">
              Läs mer
            </Button>
            <Button variant="secondary" size="md">
              Läs mer
            </Button>
            <Button variant="secondary" size="lg">
              Läs mer
            </Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
            <Button variant="secondary" loading>
              Loading
            </Button>
          </div>
        </section>

        {/* Outline Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-charcoal mb-4">
            Outline (Neutral)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="outline" size="sm">
              Avbryt
            </Button>
            <Button variant="outline" size="md">
              Avbryt
            </Button>
            <Button variant="outline" size="lg">
              Avbryt
            </Button>
            <Button variant="outline" disabled>
              Disabled
            </Button>
            <Button variant="outline" loading>
              Loading
            </Button>
          </div>
        </section>

        {/* Ghost Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-charcoal mb-4">
            Ghost (Text Link)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="ghost" size="sm">
              Hoppa över
            </Button>
            <Button variant="ghost" size="md">
              Hoppa över
            </Button>
            <Button variant="ghost" size="lg">
              Hoppa över
            </Button>
            <Button variant="ghost" disabled>
              Disabled
            </Button>
            <Button variant="ghost" loading>
              Loading
            </Button>
          </div>
        </section>

        {/* Real World Examples */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-charcoal mb-6">
            Verkliga Exempel
          </h2>

          <div className="space-y-6">
            {/* CTA Section */}
            <div className="text-center py-8">
              <h3 className="text-3xl font-bold text-midnight mb-4">
                Sälj din bil på 24 timmar
              </h3>
              <p className="text-steel text-lg mb-6">
                Få en gratis värdering och låt våra AI-mäklare hitta rätt köpare
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Få gratis värdering →
                </Button>
                <Button variant="secondary" size="lg">
                  Se hur det fungerar
                </Button>
              </div>
            </div>

            {/* Form Actions */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Formulär Exempel
              </h3>
              <div className="flex gap-3">
                <Button variant="outline">
                  Avbryt
                </Button>
                <Button variant="primary" type="submit">
                  Skicka värdering
                </Button>
              </div>
            </div>

            {/* Subtle Actions */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Subtila Actions
              </h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm">
                  Ändra uppgifter
                </Button>
                <Button variant="ghost" size="sm">
                  Ta bort annons
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="bg-charcoal text-white p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Användning</h2>
          <pre className="text-sm overflow-x-auto">
            <code>{`// Primary CTA
<Button variant="primary" size="lg" onClick={handleSubmit}>
  Få gratis värdering →
</Button>

// Secondary Action
<Button variant="secondary" size="md">
  Läs mer
</Button>

// With Loading State
<Button variant="primary" loading>
  Skickar...
</Button>

// Disabled
<Button variant="outline" disabled>
  Inte tillgänglig
</Button>

// Submit Button in Form
<Button variant="primary" type="submit">
  Skicka
</Button>`}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}
