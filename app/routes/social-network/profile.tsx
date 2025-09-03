export default function ProfilePage() {
  return (
    <main className="flex-1 p-4 w-full">
      <h1>Profile Page</h1>
      <div className="bg-white rounded-xl p-4 shadow-xs mb-4">
        <h2 className="text-lg font-semibold">User Information</h2>
        <p className="text-sm text-gray-600">Name: John Doe</p>
        <p className="text-sm text-gray-600">Email: john.doe@example.com</p>
      </div>
    </main>
  );
}