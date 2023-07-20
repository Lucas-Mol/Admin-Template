import Layout from "@/components/templates/Layout";

export default function Home() {
  return (
    <Layout title="Home" subtitle="Building Admin template">
      <section className="flex flex-1 flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-semibold">Welcome to Admin Template</h1>
        <div className="mt-14 max-w-max">
          <p className="mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada augue et nulla iaculis iaculis. Nullam vulputate neque sapien, id porttitor est facilisis eget. Fusce rutrum condimentum ex eu semper. Praesent mauris est, tincidunt eu nibh a, commodo euismod tortor. Nunc a ultricies massa. Nunc sapien augue, malesuada ac eros vitae, lobortis feugiat neque. Ut congue nisl vel massa ultrices, nec tincidunt risus dignissim.</p>
          <p className="mb-4 ">Vivamus convallis massa eget consequat pellentesque. Pellentesque nunc ligula, congue nec gravida sed, tincidunt ut nisl. Proin lobortis mi et quam placerat, vitae suscipit erat laoreet. Nam gravida lectus eu est lobortis, nec aliquam nunc pretium. Aliquam urna justo, molestie sit amet eros in, porttitor faucibus augue. Praesent ultricies libero sed libero aliquet, eu egestas arcu ullamcorper. Ut ac egestas nisl. Nulla ac ultrices lorem. Aliquam ut justo dictum velit porttitor placerat. Donec varius id diam et consequat. Sed congue venenatis scelerisque. Aenean tempor diam et odio hendrerit, at hendrerit purus porta. Praesent suscipit orci nec augue porta fringilla. Nunc auctor vitae tellus vitae ultrices. Pellentesque egestas est ut dolor pellentesque eleifend. Suspendisse imperdiet lectus vitae ante iaculis, nec lobortis nunc eleifend.</p>
          <p className="mb-4 ">Duis molestie massa a mattis condimentum. Donec ut lectus viverra, ultricies risus vel, lacinia odio. Nulla bibendum feugiat pretium. Quisque eget leo elementum libero varius consequat sit amet nec quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sagittis, nibh sed fringilla pulvinar, quam est placerat nisi, a vestibulum metus orci in velit. Ut non ante dolor. Curabitur commodo fringilla congue. Duis a consectetur ipsum.</p>
        </div>
      </section>
    </Layout>
  )
}
