import { z } from "zod";

export const productSchema = z.object({
    name: z.string({ required_error: "Product name is required. Please enter a name." }),
    brand: z.string({ required_error: "Brand name is required. Please specify the brand." }),
    
    price: z
        .number({ required_error: "Price is required. Please enter a valid number." })
        .min(0, "Price must be a positive number.")
        .or(z.string().refine((val) => !isNaN(Number(val)), "Price must be a number."))
        .transform(Number),

    quantity: z
        .number({ required_error: "Quantity is required. Please enter a valid number." })
        .min(1, "Quantity must be at least 1.")
        .or(z.string().refine((val) => !isNaN(Number(val)), "Quantity must be a number."))
        .transform(Number),

    rating: z
        .number({ required_error: "Rating is required. Please enter a valid number." })
        .min(1, "Rating must be at least 1.")
        .max(5, "Rating must not be greater than 5.")
        .or(z.string().refine((val) => !isNaN(Number(val)), "Rating must be a number."))
        .transform(Number),

    image: z
        .instanceof(File, { message: "Please upload a valid image file." }),

    category: z.string({ required_error: "Category is required. Please select a category." }),
    model: z.string({ required_error: "Model is required. Please enter the model name." }),
    inStock: z.boolean({ required_error: "Stock status is required. Please choose if the product is in stock." }),
});

export const productUpdateSchema = z.object({
    name: z.string({ required_error: "Product name is required. Please enter a name." }).optional(),
    brand: z.string({ required_error: "Brand name is required. Please specify the brand." }).optional(),
    
    price: z
        .number({ required_error: "Price is required. Please enter a valid number." })
        .min(0, "Price must be a positive number.")
        .or(z.string().refine((val) => !isNaN(Number(val)), "Price must be a number."))
        .transform(Number)
        .optional(),

    quantity: z
        .number({ required_error: "Quantity is required. Please enter a valid number." })
        .min(1, "Quantity must be at least 1.")
        .or(z.string().refine((val) => !isNaN(Number(val)), "Quantity must be a number."))
        .transform(Number)
        .optional(),

    rating: z
        .number({ required_error: "Rating is required. Please enter a valid number." })
        .min(1, "Rating must be at least 1.")
        .max(5, "Rating must not be greater than 5.")
        .or(z.string().refine((val) => !isNaN(Number(val)), "Rating must be a number."))
        .transform(Number)
        .optional(),

    // image: z
    //     .instanceof(File, { message: "Please upload a valid image file." })
    //     .optional(),

    category: z.string({ required_error: "Category is required. Please select a category." }).optional(),
    model: z.string({ required_error: "Model is required. Please enter the model name." }).optional(),
    inStock: z.boolean({ required_error: "Stock status is required. Please choose if the product is in stock." }).optional(),
});
