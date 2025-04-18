

export default function User() {
    const storedUser = sessionStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;
  
    if (!user) {
      return (
        <div className="text-center text-red-600 font-medium mt-10">
          No user data found. Please log in again.
        </div>
      );
    }
  
    return (
      <div className="max-w-md mx-auto mt-12 bg-white border border-gray-300 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">User Info</h2>
        
        <div className="space-y-3 text-gray-700">
          <p><span className="font-semibold">User ID:</span> {user._id}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Full Name:</span> {user.fullName}</p>
          <p>
            <span className="font-semibold">Role:</span> 
            <span className={`ml-2 font-medium ${user.isAdmin ? 'text-blue-600' : 'text-green-600'}`}>
              {user.isAdmin ? 'Admin' : 'Member'}
            </span>
          </p>
        </div>
      </div>
    );
  }