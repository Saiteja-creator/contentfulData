
import {extendVariants, Button} from "@nextui-org/react";

export const MyButton = extendVariants(Button, { 
  variants: { 
    color: { 
      active: "text-[#fff] bg-[#0000ff]", // active button will be blue
      inactive: "text-[#fff] bg-[#808080]", // inactive button will be gray
    },
  },
  defaultVariants: { 
    color: "inactive", // default color is gray
  },
});