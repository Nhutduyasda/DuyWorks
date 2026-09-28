import { techStackGroupsData } from "@/data/home";

export function TechStackSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#101828] sm:text-3xl">Công nghệ thường sử dụng</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#667085] sm:text-base">Lựa chọn công cụ phù hợp với từng sản phẩm.</p>
        </div>
        <dl className="grid gap-5 sm:gap-6">
          {techStackGroupsData.map((group) => (
            <div key={group.category} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-5">
              <dt className="text-sm font-semibold text-[#101828]">{group.category}</dt>
              <dd className="text-sm leading-relaxed text-[#475467] sm:text-base">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
