export default function RenderList({
  setter,
  storage,
  storageSetter,
  activeSetter,
}) {
  const educationList = storage.map((entry) => (
    <li key={entry.id}>
      {entry.place}
      <button
        onClick={() => {
          setter(entry), activeSetter(true);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => storageSetter(storage.filter((a) => a.id !== entry.id))}
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{educationList}</ul>;
}
