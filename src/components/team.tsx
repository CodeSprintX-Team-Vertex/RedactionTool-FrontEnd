const members = [
  {
    name: "Pawan Perera",
    role: "CS Undergraduate",
    avatar: "https://avatars.githubusercontent.com/u/113119539?s=96&v=4",
  },
  {
    name: "Tharindu Damruwan",
    role: "CS Undergraduate",
    avatar: "https://avatars.githubusercontent.com/u/113744956?s=96&v=4",
  },
  {
    name: "Lakith Randula",
    role: "CS Undergraduate",
    avatar: "https://avatars.githubusercontent.com/u/110283259?v=4",
  },
  {
    name: "Pethum Jeewantha",
    role: "CS Undergraduate",
    avatar: "https://avatars.githubusercontent.com/u/83197935?v=4",
  },
  {
    name: "Sahan Heshan",
    role: "CS Undergraduate",
    avatar: "https://avatars.githubusercontent.com/u/113684070?v=4",
  },
  {
    name: "Amindu Bhashana",
    role: "CS Undergraduate",
    avatar: "https://avatars.githubusercontent.com/u/121743174?s=96&v=4",
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">
          Our team
        </h2>

        <div>
          <h3 className="mb-6 text-lg font-medium">Members</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {members.map((member, index) => (
              <div key={index} className="pb-6">
                <div className="bg-background size-40 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
