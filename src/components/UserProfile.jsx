import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data from the cbackend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      const updatedUser = await response.json();
      setUser(updatedUser); 
      alert("User information updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        const response = await fetch("", {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        alert("User deleted successfully!");
        
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          {isEditing ? (
            <button type="submit">Save</button>
          ) : (
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
          <button type="button" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
