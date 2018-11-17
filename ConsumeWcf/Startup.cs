using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ConsumeWcf.Startup))]
namespace ConsumeWcf
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
