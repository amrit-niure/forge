"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
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
import { PhoneInput } from "@/components/ui/phone-input";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const australianStates = [
  "ACT",
  "NSW",
  "NT",
  "QLD",
  "SA",
  "TAS",
  "VIC",
  "WA",
] as const;

const profileFormSchema = z.object({
  companyName: z.string().min(1, {
    message: "Company name is required.",
  }),
  aboutCompany: z.string().min(25, {
    message: "About company must be at least 25 characters.",
  }),
  tradingNames: z.array(
    z.object({
      value: z.string().min(1, {
        message: "Trading name is required.",
      }),
    })
  ),
  directors: z.array(
    z.object({
      value: z.string().min(1, {
        message: "Director name is required.",
      }),
    })
  ),
  address: z.object({
    street: z.string().min(1, {
      message: "Street address is required.",
    }),
    suburb: z.string().min(1, {
      message: "Suburb is required.",
    }),
    city: z.string().min(1, {
      message: "City is required.",
    }),
    state: z.enum(australianStates, {
      message: "Please select a valid Australian state.",
    }),
    postcode: z.string().min(4, {
      message: "Postcode must be at least 4 characters.",
    }),
  }),
  phone: z.string().min(1, {
    message: "Phone number is required.",
  }),
  mobileNumber: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from database or API.
const defaultValues: Partial<ProfileFormValues> = {
  companyName: "",
  tradingNames: [{ value: "" }],
  directors: [{ value: "" }],
  address: {
    street: "",
    city: "",
    suburb: "",
    state: "NSW", // Default state
    postcode: "",
  },
  phone: "",
  mobileNumber: "",
};

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const {
    fields: tradingNameFields,
    append: appendTradingName,
    remove: removeTradingName,
  } = useFieldArray({
    name: "tradingNames",
    control: form.control,
  });

  const {
    fields: directorFields,
    append: appendDirector,
    remove: removeDirector,
  } = useFieldArray({
    name: "directors",
    control: form.control,
  });

  function onSubmit(data: ProfileFormValues) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    toast(
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter company name" {...field} />
              </FormControl>
              <FormDescription>
                Please provide your official company name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aboutCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your company"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-x-4 grid grid-cols-2 ">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <PhoneInput
                    placeholder="Enter phone number"
                    {...field}
                    defaultCountry="AU"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <PhoneInput
                    placeholder="Enter phone number"
                    {...field}
                    defaultCountry="AU"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          {tradingNameFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`tradingNames.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Trading Name
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-center space-x-2">
                      <Input placeholder="Enter trading name" {...field} />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => appendTradingName({ value: "" })}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTradingName(index)}
                  >
                    Remove
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <div>
          {directorFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`directors.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Director
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-center space-x-2">
                      <Input placeholder="Enter director name" {...field} />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => appendDirector({ value: "" })}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeDirector(index)}
                  >
                    Remove
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <FormField
          control={form.control}
          name="address.street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter street address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-x-4 grid grid-cols-2 ">
          <FormField
            control={form.control}
            name="address.suburb"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suburb</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Suburb" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-x-4 grid grid-cols-2 ">
          <FormField
            control={form.control}
            name="address.state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {australianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address.postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input placeholder="Enter postcode" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
