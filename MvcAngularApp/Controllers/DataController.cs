using MvcAngularApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcAngularApp.Controllers
{
    public class DataController : Controller
    {
        //
        // GET: /Data/

        public JsonResult GetLastContact()
        {
            Contact c = null;
            using(MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                c = dc.Contact.OrderByDescending(x=>x.ContactId).Take(1).FirstOrDefault();
            }

            return new JsonResult {Data = c, JsonRequestBehavior = JsonRequestBehavior.AllowGet};

        }

        //public ActionResult UserLogin(LoginData id)
        //{
        //    LoginData c = new LoginData();
        //    using (MyDatabaseEntities dc = new MyDatabaseEntities())
        //    {
        //        c = dc.User.Where(x=>x.UserName== id.UserName && x.UserPassword==id.UserPassword).FirstOrDefault();
        //        return new JsonResult { Data = c, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        //    }

        //}

        public ActionResult GetCountry()
        {

            List<Country> Countries = new List<Country>();
            using(MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                Countries = dc.Country.ToList();
            }
            return new JsonResult { Data = Countries, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        public JsonResult GetState(int CountryId)
        {
            List<State> States = new List<State>();
            using(MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                States = dc.State.Where(x => x.CountryId == CountryId).ToList();
            }
            return new JsonResult { Data = States, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

    }
}
