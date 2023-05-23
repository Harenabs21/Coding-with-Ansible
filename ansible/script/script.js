function generateDomainNames() {
    const subdomains = ['site', 'blog', 'work'];
    const domain = 'hei.school';
    const domainNames = [];
  
    for (const subdomain of subdomains) {
      const domainName = `${subdomain}.${domain}`;
      domainNames.push(domainName);
    }
  
    return domainNames;
  }
  
  const domainNames = generateDomainNames();
  
  for (const domainName of domainNames) {
    console.log(domainName);
  }
  