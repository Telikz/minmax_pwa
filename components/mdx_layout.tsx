export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <div className='flex flex-col'>
    <div className="hero bg-base-100">
      <div className="hero-content">
        <div className="max-w-screen-lg">
          <div>{children}</div>
        </div>
      </div>
    </div>
  </div>
}