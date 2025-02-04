"use client";

import { toast } from "sonner";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from "@/components/ui/file-input";
import { useState } from "react";
import { CloudUpload, Paperclip } from "lucide-react";

// Define the schema for a single education entry
const educationSchema = z.object({
    level: z.string().min(1, "Education level is required"),
    qualification: z.string().min(1, "Qualification is required"),
    institution: z.string().min(1, "University/College name is required"),
    courseName: z.string().min(1, "Course name is required"),
    duration: z.string().min(1, "Duration is required"),
    completionDate: z.coerce.date(),
    country: z.string().min(1, "Country is required"),
    document: z.any().optional(),
});

// Define the schema for the entire form (array of education entries)
const formSchema = z.object({
    educations: z.array(educationSchema),
});

export default function EducationForm() {


    const [files, setFiles] = useState<File[] | null>(null);

    const dropZoneConfig = {
        maxFiles: 5,
        maxSize: 1024 * 1024 * 4,
        multiple: true,
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            educations: [
                {
                    level: "",
                    qualification: "",
                    institution: "",
                    courseName: "",
                    duration: "",
                    completionDate: new Date(),
                    country: "",
                    document: null,
                },
            ],
        },
    });

    const { fields, append, remove } = useFieldArray({
        name: "educations",
        control: form.control,
    });

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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto pb-10">
                {fields.map((field, index) => (
                    <div key={field.id} className="space-y-6">
                        <FormField
                            control={form.control}
                            name={`educations.${index}.level`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Education Level</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Education Level" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Vocational">Vocational Training / Diploma</SelectItem>
                                            <SelectItem value="Undergraduate">Undergraduate - Higher Education</SelectItem>
                                            <SelectItem value="Graduate">Graduate</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name={`educations.${index}.qualification`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Qualification</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter qualification" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name={`educations.${index}.institution`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>University / College Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter institution name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 gap-2">
                            <FormField
                                control={form.control}
                                name={`educations.${index}.courseName`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter course name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`educations.${index}.duration`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Duration</FormLabel>
                                        <FormControl>
                                            <Input placeholder="2 years" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">


                            <FormField
                                control={form.control}
                                name={`educations.${index}.completionDate`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Completion Date</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="date"
                                                {...field}
                                                value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name={`educations.${index}.country`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter country" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name={`educations.${index}.document`}
                            render={() => (
                                <FormItem>
                                    <FormLabel>Documents</FormLabel>
                                    <FormControl>
                                        <FileUploader
                                            value={files}
                                            onValueChange={setFiles}
                                            dropzoneOptions={dropZoneConfig}
                                            className="relative bg-background rounded-lg p-2"
                                        >
                                            <FileInput
                                                id="fileInput"
                                                className="outline-dashed outline-1 outline-slate-500"
                                            >
                                                <div className="flex items-center justify-center flex-col p-8 w-full ">
                                                    <CloudUpload className='text-gray-500 w-10 h-10' />
                                                    <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                        <span className="font-semibold">Click to upload</span>
                                                        &nbsp; or drag and drop
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        SVG, PNG, JPG or GIF
                                                    </p>
                                                </div>
                                            </FileInput>
                                            <FileUploaderContent>
                                                {files &&
                                                    files.length > 0 &&
                                                    files.map((file, i) => (
                                                        <FileUploaderItem key={i} index={i}>
                                                            <Paperclip className="h-4 w-4 stroke-current" />
                                                            <span>{file.name}</span>
                                                        </FileUploaderItem>
                                                    ))}
                                            </FileUploaderContent>
                                        </FileUploader>
                                    </FormControl>
                                    <FormDescription
                                    >Select any education documents to upload.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="button" variant="destructive" onClick={() => remove(index)}>
                            Remove Education
                        </Button>
                    </div>
                ))}
                <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => append({
                        level: "",
                        qualification: "",
                        institution: "",
                        courseName: "",
                        duration: "",
                        completionDate: new Date(),
                        country: "",
                        document: null,
                    })}>
                        Add Another Education
                    </Button>

                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    );
}
