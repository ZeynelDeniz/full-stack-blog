import { Link } from "react-router";
import Image from "../components/image"
import PostMenuActions from "../components/PostMenuActions";

const SinglepostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Detail*/}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae molestias ipsam sint quae enim vero, nulla hic ducimus!
            Ullam sit delectus qui itaque odio, a laboriosam vero soluta
            possimus hic!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" className="rounded-2xl" w="600" />
        </div>
      </div>
      {/* Content*/}
      <div className="flex flex-col md:flex-row gap-8">
        {/*text*/}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            similique vitae deleniti atque consequatur. Modi minima voluptatibus
            recusandae, possimus optio commodi porro vero veniam iure cupiditate
            debitis nobis incidunt accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            provident vel placeat tempore expedita suscipit officia
            exercitationem? Dolorem laudantium aperiam natus nesciunt voluptatem
            cupiditate repellendus adipisci aspernatur voluptates? Ipsum,
            aperiam. Adipisci unde natus sequi nisi eos aperiam! Excepturi
            aliquid quibusdam sapiente explicabo, laudantium labore, doloremque
            vitae, inventore sint deserunt saepe ad numquam sed nihil cupiditate
            exercitationem rem vero eius facilis corporis? Quas iure minima
            placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sed sint ducimus. Aperiam fugiat ex dignissimos eaque itaque
            officiis maxime, animi doloribus aliquam natus beatae dolores,
            assumenda odit! Vero ipsum ex nulla blanditiis error cupiditate
            porro, velit officia praesentium id modi voluptatum numquam magnam
            quae ratione tempore commodi iure mollitia perferendis eius
            quisquam! Minima enim error atque natus quod debitis ea obcaecati
            sint amet reiciendis praesentium ipsum explicabo facere quisquam
            dolores a excepturi mollitia, labore, necessitatibus modi, unde
            saepe aspernatur dolorem! In tempora enim, nemo ea aspernatur odit?
            Placeat sunt deleniti perspiciatis aut quo eum distinctio eligendi
            rem blanditiis illo, soluta quibusdam, quae quas laboriosam libero
            dignissimos. Itaque voluptate minus est ipsum qui laudantium
            corrupti, debitis in repudiandae aperiam commodi nostrum amet culpa,
            atque dolor enim. Sint recusandae tempora voluptas reiciendis
            maiores dicta eos expedita velit dignissimos molestias? Ipsam
            nostrum voluptatum sed incidunt enim natus dolores, adipisci quaerat
            inventore minus!
          </p>
        </div>
        {/*menu*/}
        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link>John Doe</Link>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
        </div>
      </div>
    </div>
  );
}

export default SinglepostPage