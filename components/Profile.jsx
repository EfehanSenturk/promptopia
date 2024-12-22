import PrompCard from "./PrompCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-4xl text-orange-500">{name} Profile</h1>
      <p>{desc}</p>
      <div className="mt-10 ">
        {data.map((post) => (
          <PrompCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
