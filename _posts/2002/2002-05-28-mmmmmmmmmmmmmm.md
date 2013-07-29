--- 
layout: post
lj_post: TRUE
title: Mmmmmmmmmmmmmm.
tags: []

drupal_path: mmmmmmmmmmmmmm
drupal_nid: 950
created: 1022565000
---
<FONT SIZE=1><PRE>Public Function GenerateSKUs() As Collection
    CheckInit ("GenerateSKUs")
    Dim strSQL As String
    Dim i As Integer
    Dim x As Integer
    Dim strCurrentVarType As String
    Dim rsVar As ADODB.Recordset
    Dim objDB As Concord.db
    Dim clSKUBase As Collection
    Dim clSKUScratch As Collection
    Dim clSKUFinal As Collection
    
    Set clSKUBase = CreateObject("Collection")
    Set clSKUScratch = CreateObject("Collection")
    Set clSKUFinal = CreateObject("Collection")
    Set objDB = CreateObject("Concord.db")
    
    strSQL = "SELECT variations.id, variations.code, variations.name, variations.type " & _
            "FROM m_product_variations INNER JOIN " & _
            "variations ON m_product_variations.variation = variations.id INNER JOIN " & _
            "variation_types ON variations.type = variation_types.id " & _
            "WHERE (variation_types.affects_sku <> 0) AND (m_product_variations.product = " & m_id & ") " & _
            "ORDER BY variations.type DESC"
            
    Set rsVar = objDB.GetRS(strSQL)
    
    clSKUBase.Add m_strBaseSKU
        
    Do Until rsVar.EOF
        strCurrentVarType = rsVar.Fields("type").Value
        
        Do While rsVar.Fields("type") = strCurrentVarType
            clSKUScratch.Add "_" & rsVar.Fields("CODE")
            rsVar.MoveNext
            If rsVar.EOF Then Exit Do
        Loop
        
        For i = 1 To clSKUScratch.Count
            For x = 1 To clSKUBase.Count
                clSKUFinal.Add clSKUBase(x) & clSKUScratch(i)
            Next
        Next
        
        If Not rsVar.EOF Then
            Set clSKUBase = clSKUFinal
            Set clSKUFinal = CreateObject("Collection")
        End If
    Loop
    
    Set GenerateSKUs = clSKUFinal
    
    Set rsVar = Nothing
    Set objDB = Nothing
    Set clSKUBase = Nothing
    Set clSKUScratch = Nothing
    Set clSKUFinal = Nothing
End Function
</PRE></FONT>
