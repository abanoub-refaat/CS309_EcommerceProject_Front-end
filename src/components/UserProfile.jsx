import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      // Redirect to login page if no token
      window.location.href = "/login";
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(token)
        if (!response.ok) {
          console.log("res:"+JSON.stringify(response))
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        console.log(data)
        setUser(data.data);
        console.log(user)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load profile. Please try again later.");
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(user)
    try {
      const response = await fetch(`http://localhost:4000/api/v1/users/update/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        const response = await fetch("http://localhost:4000/api/v1/users/delete", {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        alert("User deleted successfully!");
        localStorage.removeItem("token");
        window.location.href = "/signup";
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete account. Please try again.");
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name || ""}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={user.phone || ""}
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