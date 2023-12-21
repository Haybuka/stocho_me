import useProfile from '../../hooks/useProfile';

const Profile = () => {
  const { profile } = useProfile();
  return (
    <main className=" h-full flex">
      <section className="bg-white w-full h-3/5 md:w-[60%] xl:w-[30%] md:h-3/5 rounded-xl px-10 py-4 mx-auto uppercase text-sm">
        <article>
          <div className="bg-gray-200 w-40 h-40 rounded-full mx-auto "></div>
          <aside className="my-3">
            <h3 className="font-bold text-center ">My Profile</h3>
          </aside>
          <aside className="my-6">
            <div className="py-3 border-b my-2">
              <h3 className=" mb-3 ">Name :</h3>
              <p>{profile?.name}</p>
            </div>
            <div className="py-3 my-2">
              <h3 className=" mb-3">Email :</h3>
              <p>{profile?.email}</p>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
};

export default Profile;
