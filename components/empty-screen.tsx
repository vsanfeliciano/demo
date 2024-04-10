import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: '¿Quiero un coche Electrico que tengo que saber?',
    message: '¿Quiero un coche Electrico  que tengo que saber?'
  },
  {
    heading: '¿Tengo dudas que es mejor React o Svelte?',
    message: '¿Tengo dudas que es mejor React o Svelte?'
  },
  {
    heading: '¿Que modelo LLM es mejor para mi?',
    message: '¿Que modelo LLM es mejor para mi ?'
  },
  {
    heading: '¿A que huelen las nubes?',
    message: '¿A que huelen las nubes?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
