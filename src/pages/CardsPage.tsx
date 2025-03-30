import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const CardsPage = () => {

    return (
        <div className="w-full grid-cols-12 gap-6">
            <h2 className="col-span-12 text-2xl font-bold">Cards</h2>
            <div className="col-span-12 grid grid-cols-12 gap-6">
                <h3 className="col-span-12 text-2xl font-bold">Cards with Image</h3>
                <Card className="col-span-12 md:col-span-6 lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Card With Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4 ">
                            <img src="/images/card/lab-card.jpg" alt="Chemistry Lab" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-12 md:col-span-6 lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Card With Image and Action Button</CardTitle>
                    </CardHeader>
                    <CardContent> 
                        <div className="flex flex-col gap-4 ">
                            <img src="/images/card/lab-card.jpg" alt="Chemistry Lab" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Action</Button>
                    </CardFooter>
                </Card> 
                <Card className="col-span-12 md:col-span-6 lg:col-span-4 pt-0">
                    <CardHeader className="p-0">
                        <img src="/images/card/lab-card.jpg" alt="Chemistry Lab" className="w-full object-cover rounded-lg rounded-b-none" />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <CardTitle>Card with Image no padding and action button</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <Button variant="secondary">Action</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}