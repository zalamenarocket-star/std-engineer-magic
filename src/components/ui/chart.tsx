import * as React from "react";

import { cn } from "@/lib/utils";

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<string, string>;
  };
};

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
};

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, children, config: _config, ...props }, ref) => (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {children}
    </div>
  ),
);
ChartContainer.displayName = "ChartContainer";

const ChartStyle = () => null;
const ChartTooltip = () => null;
const ChartLegend = () => null;

type ChartTooltipContentProps = React.ComponentProps<"div"> & {
  active?: boolean;
  payload?: Array<{
    color?: string;
    dataKey?: string;
    name?: string;
    value?: number | string;
  }>;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
  label?: React.ReactNode;
  labelFormatter?: (label: React.ReactNode) => React.ReactNode;
  formatter?: (value: number | string | undefined, name: string | undefined) => React.ReactNode;
  color?: string;
  labelClassName?: string;
};

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  (
    {
      active,
      payload,
      className,
      label,
      hideLabel,
      hideIndicator,
      labelFormatter,
      formatter,
      labelClassName,
      color,
      ...props
    },
    ref,
  ) => {
    if (!active || !payload?.length) return null;

    const formattedLabel = labelFormatter ? labelFormatter(label) : label;

    return (
      <div
        ref={ref}
        className={cn("rounded-lg border border-border bg-background p-3 text-sm shadow-lg", className)}
        {...props}
      >
        {!hideLabel && formattedLabel ? <div className={cn("mb-2 font-medium", labelClassName)}>{formattedLabel}</div> : null}
        <div className="space-y-1.5">
          {payload.map((item) => (
            <div key={item.dataKey ?? item.name} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                {!hideIndicator ? (
                  <span
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ backgroundColor: item.color ?? color ?? "currentColor" }}
                    aria-hidden="true"
                  />
                ) : null}
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-foreground">
                {formatter ? formatter(item.value, item.name) : item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltipContent";

type ChartLegendContentProps = React.ComponentProps<"div"> & {
  payload?: Array<{
    color?: string;
    dataKey?: string;
    value?: string;
  }>;
  hideIcon?: boolean;
};

const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
  ({ className, payload, hideIcon = false, ...props }, ref) => {
    if (!payload?.length) return null;

    return (
      <div ref={ref} className={cn("flex flex-wrap items-center gap-4", className)} {...props}>
        {payload.map((item) => (
          <div key={item.dataKey ?? item.value} className="flex items-center gap-2 text-sm text-muted-foreground">
            {!hideIcon ? (
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: item.color ?? "currentColor" }}
                aria-hidden="true"
              />
            ) : null}
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    );
  },
);
ChartLegendContent.displayName = "ChartLegendContent";

export { ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent };
