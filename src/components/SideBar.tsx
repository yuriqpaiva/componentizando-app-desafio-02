import { Button } from "./Button";

interface SideBarProps {
  genres: {
    id: number;
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  }[];
  selectedGenreId: number;
  handleGenreChange: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  handleGenreChange,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleGenreChange(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
