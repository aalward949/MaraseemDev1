'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-2xl overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-soft border border-accent/20 hover:shadow-medium',
        elevated: 'bg-white shadow-medium border border-accent/30 hover:shadow-strong',
        outlined: 'bg-white border-2 border-accent hover:border-secondary',
        ghost: 'bg-transparent hover:bg-accent/30',
        gradient: 'bg-gradient-to-br from-accent to-white shadow-soft hover:shadow-medium',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-6', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-heading font-semibold leading-none tracking-tight text-darkAccent',
      className
    )}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-body-md text-darkAccent/70 leading-relaxed', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
));

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-6', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';

// Image Card Component
interface ImageCardProps extends CardProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | '16/9' | '4/3' | '3/2';
  overlay?: boolean;
  overlayContent?: React.ReactNode;
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  ({ 
    className, 
    src, 
    alt, 
    aspectRatio = '4/3', 
    overlay = false, 
    overlayContent,
    children,
    ...props 
  }, ref) => {
    const aspectRatioClasses = {
      'square': 'aspect-square',
      '16/9': 'aspect-video',
      '4/3': 'aspect-4/3',
      '3/2': 'aspect-3/2',
    };

    return (
      <Card ref={ref} className={cn('group cursor-pointer', className)} padding="none" {...props}>
        <div className={cn('relative overflow-hidden', aspectRatioClasses[aspectRatio])}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {overlayContent && (
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  {overlayContent}
                </div>
              )}
            </div>
          )}
        </div>
        {children && (
          <div className="p-6">
            {children}
          </div>
        )}
      </Card>
    );
  }
);

ImageCard.displayName = 'ImageCard';

// Stats Card Component
interface StatsCardProps extends CardProps {
  value: string | number;
  label: string;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
  };
  icon?: React.ReactNode;
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, value, label, change, icon, ...props }, ref) => (
    <Card ref={ref} className={cn('text-center', className)} {...props}>
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
            {icon}
          </div>
        </div>
      )}
      <div className="text-3xl font-heading font-bold text-darkAccent mb-2">
        {value}
      </div>
      <div className="text-body-sm text-darkAccent/70 mb-2">
        {label}
      </div>
      {change && (
        <div className={cn(
          'text-body-sm font-medium',
          change.trend === 'up' && 'text-green-600',
          change.trend === 'down' && 'text-red-600',
          change.trend === 'neutral' && 'text-darkAccent/70'
        )}>
          {change.trend === 'up' && '↗'}
          {change.trend === 'down' && '↘'}
          {change.trend === 'neutral' && '→'}
          {Math.abs(change.value)}%
        </div>
      )}
    </Card>
  )
);

StatsCard.displayName = 'StatsCard';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ImageCard,
  StatsCard,
  cardVariants,
};