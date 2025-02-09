"use client";

import React from "react";
import classNames from "classnames";
import { LucideIcon } from "lucide-react";

const IconButton = React.forwardRef(
  ({ icon: Icon, className, ...props }, ref) => (
    <button
      ref={ref}
      className={classNames("p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700", className)}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </button>
  )
);

IconButton.displayName = "IconButton";

export { IconButton }; 