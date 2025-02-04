"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    testType: z.string(),
    reading: z.number().optional(),
    writing: z.number().optional(),
    listening: z.number().optional(),
    speaking: z.number().optional(),
    overall: z.number().optional()
});

export default function EnglishForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            testType: "",
            reading: undefined,
            writing: undefined,
            listening: undefined,
            speaking: undefined,
            overall: undefined,
        },
    });

    // Watch the `testType` field to conditionally render other fields
    const selectedTestType = form.watch("testType");

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto pb-10">

                <FormField
                    control={form.control}
                    name="testType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Test Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="-- Select Test Type --" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="IELTS">IELTS</SelectItem>
                                    <SelectItem value="PTE">PTE</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>Enter the type of English test you have done. (eg: IELTS, PTE, etc )</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Conditionally render fields based on the selected test type */}
                {selectedTestType === "IELTS" && (
                    <>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="reading"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Reading</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Reading Score"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="writing"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Writing</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Writing Score"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="listening"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Listening</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Listening Score"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="speaking"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Speaking</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Speaking Score"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="overall"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Overall Score</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Overall"
                                            type="number"
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </>
                )}

                {selectedTestType === "PTE" && (
                    <>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="reading"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Reading</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Reading Score"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="writing"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Writing</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Writing Score"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="listening"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Listening</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Listening Score"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">
                                <FormField
                                    control={form.control}
                                    name="speaking"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Speaking</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Speaking Score"
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="overall"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Overall Score</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Overall"
                                            type="number"
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </>
                )}

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}