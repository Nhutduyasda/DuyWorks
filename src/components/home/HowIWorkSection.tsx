import { processStepsData, valuePropsData } from "@/data/home";

export function HowIWorkSection() {
  return (
    <section className="bg-[#F9FAFB] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">Cách tôi làm việc</h2>
          <p className="mt-4 text-base leading-relaxed text-[#475467]">Tập trung vào nhu cầu thực tế, trao đổi rõ ràng và triển khai theo từng bước.</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {valuePropsData.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-semibold text-[#101828]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475467] sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
        <ol className="mt-12 grid gap-7 border-t border-[#EAECF0] pt-9 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {processStepsData.map((step) => (
            <li key={step.step} className="flex items-baseline gap-4 sm:block">
              <span className="text-sm font-semibold tabular-nums text-[#667085]">{step.step}</span>
              <h3 className="text-base font-semibold text-[#101828] sm:mt-3">{step.title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
