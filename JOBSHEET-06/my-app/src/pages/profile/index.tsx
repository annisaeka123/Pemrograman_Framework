import Link from "next/link"

const ProfilePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Profile</h1>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Nama:</strong> Annisa Eka Puspita</p>
        <p><strong>Email:</strong> annisa@gmail.com</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link href="/profile/edit">
          <button>Edit Profile</button>
        </Link>
      </div>
    </div>
  )
}

export default ProfilePage
