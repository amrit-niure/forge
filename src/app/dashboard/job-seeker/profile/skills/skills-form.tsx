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
import { Textarea } from "@/components/ui/textarea";
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from "@/components/ui/file-input";
import { CloudUpload, Paperclip } from "lucide-react";
import { useState } from "react";

// Define the schema for a single skill entry
const skillSchema = z.object({
  skillName: z.string().min(1, "Skill name is required"),
  proficiencyLevel: z.string().min(1, "Proficiency level is required"),
  skillCategory: z.string().min(1, "Skill category is required"),
  description: z.string().optional(),
  document: z.any().optional(),
});

// Define the schema for the entire form (array of skills)
const formSchema = z.object({
  skills: z.array(skillSchema),
});

export default function SkillsForm() {


  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: [
        {
          skillName: "",
          proficiencyLevel: "",
          skillCategory: "",
          description: "",
          document: null,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "skills",
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
              name={`skills.${index}.skillName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skill Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter skill name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name={`skills.${index}.proficiencyLevel`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proficiency Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select proficiency level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                /></div>
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name={`skills.${index}.skillCategory`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skill Category</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter skill category" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div></div>
            <FormField
              control={form.control}
              name={`skills.${index}.description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter skill description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`skills.${index}.document`}
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
      
                          files.map((file: File, i: number) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  <FormDescription
                  >Select any skills proving documents to upload.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="button" variant="destructive" onClick={() => remove(index)}>
              Remove Skill
            </Button>
          </div>
        ))}
<div className="flex justify-between" >
        <Button type="button" variant="outline" onClick={() => append({
          skillName: "",
          proficiencyLevel: "",
          skillCategory: "",
          description: "",
          document: null,
        })}>
          Add Another Skill
        </Button>

        <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
