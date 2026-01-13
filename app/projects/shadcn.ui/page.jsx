"use client"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const page = () => {
  return (
    <div className="min-h-screen bg-amber-50  p-4">
      <p>
        This approach works well until you need to customize a component to fit your design
        system or require one that isn’t included in the library. Often, you end up wrapping
        library components, writing workarounds to override styles, or mixing components from
        different libraries with incompatible APIs.
      </p>
      <Button> Click Me </Button>
    <div className="p-4 ">
      <Accordion
        type="single"
        collapsible
        className="w-full "
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shipping Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 margin-top-8">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}



export default page;