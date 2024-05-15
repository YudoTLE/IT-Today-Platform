import express from "express";
import session from "express-session";
import favicon from "serve-favicon";
import expressLayouts from "express-ejs-layouts";
import cors from "cors";
import "dotenv/config";

const app = express();

app.set("view engine", "ejs"); //menggunakan EJS

app.use(cors()); //perizinan policy untuk fetch
app.use(favicon("./public/images/browser/logo-ittoday2024.ico")); //icon untuk tab browser
app.use(express.static("public")); //agar dapat mengakses image dan css di folder "public"
app.use(expressLayouts); //menggunakan express-ejs-layouts

app.get("/", (req, res) => {
    res.render("pages/client/main", {
        title: "IT Today",
        layout: "components/client/layout",
        nav_id: 0
    });
});
app.get("/dashboard", (req, res) => {
    res.render("pages/client/dashboard", {
        title: "Dashboard",
        layout: "components/client/layout",
        nav_id: 1
    });
});
app.get("/dashboard-admin", (req, res) => {
    res.render("pages/admin/main", {
        title: "Dashboard Admin",
        layout: "components/admin/layout"
    })
});
app.get("/dashboard-admin/event", (req, res) => {
   res.render("pages/admin/event", {
        title: "Event",
        layout: "components/admin/layout"
   })
});
app.get("/dashboard-admin/competition", (req, res) => {
   res.render("pages/admin/competition", {
        title: "Competition",
        layout: "components/admin/layout"
   })
});

// harus backend2an

app.get("/dashboard-admin/competition/competition-name", (req, res) => {
  res.render("pages/admin/competitionDetail", {
       title: "competition-name",
       layout: "components/admin/layout"
  })
});
app.get("/dashboard-admin/event/event-name", (req, res) => {
  res.render("pages/admin/eventDetail", {
       title: "event-name",
       layout: "components/admin/layout"
  })
});

app.get("/dashboard-admin/competition/competition-name/team-name", (req, res) => {
  res.render("pages/admin/competitionTeamDetail", {
       title: "team-name",
       layout: "components/admin/layout"
  })
});

app.listen(process.env.PORT, () => {
    console.log(`Server Is Listening In Port ${ process.env.PORT }`);
});