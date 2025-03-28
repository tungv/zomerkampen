"use client";

export function FormRoot({ children }: { children: React.ReactNode }) {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
      {children}
    </form>
  );
}

export function FormSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="col-span-full grid grid-cols-subgrid gap-y-4 gap-x-12">
      {children}
    </section>
  );
}

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return <h3 className="col-span-full text-lg font-medium">{children}</h3>;
}

export function FormField({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

export function FormLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-bold text-gray-700 tracking-tight"
    >
      {children}
    </label>
  );
}

export function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="mt-1 border-b min-w-0" />;
}

export function CombinedFields({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-16">{children}</div>;
}
