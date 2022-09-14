export async function isAuth (req,res,next){
if(req.session.userId) next()
else res.redirect("/auth/login")
}

export async function notAuth (req,res,next){
    if(!req.session.userId) next()
    else res.redirect("/")
    }