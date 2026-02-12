import { useEffect, useState } from "react"
import { Plus, Pencil, Trash2, X } from "lucide-react"
import api from "../services/api/axios"

export default function AllTeams() {
  const [users, setUsers] = useState([])
  const [teams, setTeams] = useState([])
  const [teamName, setTeamName] = useState("")
  const [selectedUsers, setSelectedUsers] = useState([])
  const [editingTeamId, setEditingTeamId] = useState(null)
  const [loading, setLoading] = useState(false)

  // ================= FETCH USERS =================
  const fetchUsers = async () => {
    const { data } = await api.post("/users/list")
    setUsers(data.data)
  }

  // ================= FETCH TEAMS =================
  const fetchTeams = async () => {
    const { data } = await api.get("/teams")
    setTeams(data.data)
  }

  useEffect(() => {
    fetchUsers()
    fetchTeams()
  }, [])

  // ================= TOGGLE USER =================
  const toggleUser = (user) => {
    const exists = selectedUsers.find(u => u._id === user._id)

    if (exists) {
      setSelectedUsers(selectedUsers.filter(u => u._id !== user._id))
    } else {
      setSelectedUsers([...selectedUsers, { ...user, role: "member" }])
    }
  }

  // ================= CHANGE ROLE =================
  const changeRole = (id, role) => {
    setSelectedUsers(
      selectedUsers.map(u =>
        u._id === id ? { ...u, role } : u
      )
    )
  }

  // ================= CREATE OR UPDATE =================
  const handleSubmit = async () => {
    if (!teamName || selectedUsers.length === 0) return

    try {
      setLoading(true)

      const payload = {
        name: teamName,
        members: selectedUsers.map(u => ({
          user: u._id,
          role: u.role,
        })),
      }

      if (editingTeamId) {
        await api.put(`/teams/${editingTeamId}`, payload)
      } else {
        await api.post("/teams", payload)
      }

      resetForm()
      fetchTeams()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // ================= DELETE TEAM =================
  const deleteTeam = async (id) => {
    if (!window.confirm("Are you sure you want to delete this team?")) return

    await api.delete(`/teams/${id}`)
    fetchTeams()
  }

  // ================= EDIT TEAM =================
  const editTeam = (team) => {
    setEditingTeamId(team._id)
    setTeamName(team.name)

    const formattedMembers = team.members.map(m => ({
      _id: m.user._id,
      name: m.user.name,
      email: m.user.email,
      role: m.role,
    }))

    setSelectedUsers(formattedMembers)
  }

  const resetForm = () => {
    setTeamName("")
    setSelectedUsers([])
    setEditingTeamId(null)
  }

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        All Teams
      </h1>

      {/* CREATE / EDIT CARD */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200 mb-8">

        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          {editingTeamId ? "Edit Team" : "Create New Team"}
        </h2>

        <input
          type="text"
          placeholder="Enter Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* USERS LIST */}
        <div className="max-h-60 overflow-y-auto border border-slate-200 rounded-xl">
          {users.map(user => {
            const isSelected = selectedUsers.find(u => u._id === user._id)

            return (
              <div
                key={user._id}
                className="flex justify-between items-center px-4 py-3 border-b border-slate-100 hover:bg-slate-50"
              >
                <div>
                  <p className="font-medium text-slate-800">{user.name}</p>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>

                <button
                  onClick={() => toggleUser(user)}
                  className={`px-4 py-1 text-sm rounded-lg ${
                    isSelected
                      ? "bg-red-100 text-red-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {isSelected ? "Remove" : "Add"}
                </button>
              </div>
            )
          })}
        </div>

        {/* ASSIGN ROLES */}
        {selectedUsers.length > 0 && (
          <div className="mt-6">
            <h3 className="font-medium text-slate-700 mb-3">
              Assign Roles
            </h3>

            {selectedUsers.map(user => (
              <div key={user._id} className="flex justify-between mb-3">
                <span>{user.name}</span>
                <select
                  value={user.role}
                  onChange={(e) =>
                    changeRole(user._id, e.target.value)
                  }
                  className="px-3 py-1 border border-slate-200 rounded-lg"
                >
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="member">Member</option>
                </select>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2 text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
          >
            <Plus size={18} />
            {editingTeamId ? "Update Team" : "Create Team"}
          </button>

          {editingTeamId && (
            <button
              onClick={resetForm}
              className="px-6 py-2 rounded-xl border border-slate-300"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* TEAMS LIST */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          Created Teams
        </h2>

        {teams.map(team => (
          <div
            key={team._id}
            className="mb-4 p-4 bg-slate-50 rounded-xl border border-slate-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-slate-800">
                {team.name}
              </h3>

              <div className="flex gap-3">
                <button
                  onClick={() => editTeam(team)}
                  className="text-blue-600"
                >
                  <Pencil size={18} />
                </button>

                <button
                  onClick={() => deleteTeam(team._id)}
                  className="text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            {team.members.map((member, i) => (
              <p key={i} className="text-sm text-slate-600">
                {member.user?.name} — {member.role}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
