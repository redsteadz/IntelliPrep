function Button({content, onClick}){
  return(
    <button className="bg-transparent hover:bg-blue-300 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded max-w-fit " onClick={onClick}>
      {content}
</button>
  )
}

export default Button
