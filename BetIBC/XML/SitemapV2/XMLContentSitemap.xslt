<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"  
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
xmlns:msxsl="urn:schemas-microsoft-com:xslt"
xmlns:custom="commergent"
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:xhtml="http://www.w3.org/1999/xhtml"             
exclude-result-prefixes="msxsl custom">
  <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"  encoding="utf-8" />
  <msxsl:script language="C#" implements-prefix="custom">
    public string Now(){
      return DateTime.Now.ToString("O");
    }
  </msxsl:script>
    <xsl:template match="/NavigationTree">
   <urlset>
        <xsl:apply-templates select="Page">
          <xsl:with-param name="depth" select="1"/>
        </xsl:apply-templates>
    </urlset>
  </xsl:template>

  <xsl:template match="Page [@ID != '101630']">
    <xsl:param name="depth"/>
    <xsl:variable name="scheme" select="//Settings/GlobalTags/Global.Request.Scheme"/>
    <xsl:variable name="host" select="//Settings/GlobalTags/Global.Request.Host"/>
    <xsl:choose>
      <xsl:when test="@ShowInSitemap='True'">
      <url>
        <loc>
            <xsl:choose>
            <xsl:when test="@FriendlyHref = '/acasa'">
                <xsl:value-of select="concat($scheme,'://',$host)" disable-output-escaping="yes"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="concat($scheme,'://',$host,@FriendlyHref)" disable-output-escaping="yes"/>
            </xsl:otherwise>
            </xsl:choose>
        </loc>
        <lastmod><xsl:value-of select="custom:Now()" /></lastmod>
        <changefreq>weekly</changefreq>
        </url>
        <xsl:if test="count(Page)">
            <xsl:apply-templates select="Page">
              <xsl:with-param name="depth" select="$depth+1"/>
            </xsl:apply-templates>
        </xsl:if>
      </xsl:when>
      <xsl:otherwise>
             <xsl:apply-templates select="Page">
              <xsl:with-param name="depth" select="$depth+1"/>
            </xsl:apply-templates>
      </xsl:otherwise>
    </xsl:choose>
    
  </xsl:template>


</xsl:stylesheet>
