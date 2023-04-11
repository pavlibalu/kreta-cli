function goodbye() {
    console.log("Logging out...")
    setTimeout(() => {
        console.log("Logout successfull!")
        return  process.exit()
    }, 3000)
}

export { goodbye }