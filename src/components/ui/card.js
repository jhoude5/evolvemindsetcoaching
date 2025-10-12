import React from "react";

const cn = (...values) => values.filter(Boolean).join(" ");

export const Card = ({ className = "", children, ...props }) => (
  <div
    className={cn("border border-slate-200 bg-white shadow-sm rounded-3xl", className)}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ className = "", children, ...props }) => (
  <div className={cn("p-6", className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className = "", children, ...props }) => (
  <h3 className={cn("font-semibold leading-tight", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className = "", children, ...props }) => (
  <p className={cn("text-base text-slate-600", className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className = "", children, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);
