import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading , setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const[error , setError]=useState("");

  // Fetch user data from the cbackend
  useEffect(() => {
    fetch("") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to load profile. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  
  const handleUpdate = () => {
    fetch("", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update profile");
        }
        return response.json();
      })
      .then(() => {
        alert("Profile updated successfully!");
        setIsEditing(false); 
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      });
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
