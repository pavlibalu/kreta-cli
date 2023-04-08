function goodbye() {
    console.log("Logging out... // Kijelentkezés...")
    setTimeout(() => {
        console.log("Logout successfull! // Kijelentkezés sikeres!")
        return  process.exit()
    }, 3000)
}

export { goodbye }